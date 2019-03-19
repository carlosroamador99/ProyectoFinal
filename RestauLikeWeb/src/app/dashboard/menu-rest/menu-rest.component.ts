import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/menu/menu.service';
import { ListApiRestauranteResponse } from 'src/app/interfaces/list-api-response.interface';
import { MenuRestDto } from 'src/app/dto/menu.dto';
import { MenuRestResponse } from 'src/app/interfaces/menu-response.interface';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { RestauranteResponse } from 'src/app/interfaces/restaurante-response.interface';
import { element } from 'protractor';
import { DialogEditDeleteMenuComponent } from '../dialog-edit-delete-menu/dialog-edit-delete-menu.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-rest',
  templateUrl: './menu-rest.component.html',
  styleUrls: ['./menu-rest.component.scss']
})
export class MenuRestComponent implements OnInit {
  menuRestaurante: MenuRestResponse;
  menuResponse: ListApiRestauranteResponse[];
  id: string;
  entrantes: string[];
  primeros_platos: string[];
  segundos_platos: string[];
  postres: string[];
  bebidas: string[];

  constructor(private menuRestService: RestauranteService, private dialog: MatDialog, private routes: Router) { }

  ngOnInit() {
    this.getMenuRest()
  }

  getMenuRest() {    
    this.menuRestService.getRestaurante().subscribe(restaurante => {
      this.menuResponse = <ListApiRestauranteResponse[]>restaurante.rows;
      console.log(restaurante)
      restaurante.rows.forEach(element => {
        this.menuRestaurante = element.menu
        console.log(element)
        if (this.menuRestaurante != null) {
          this.id = element.menu.id;
          this.entrantes = element.menu.entrantes;
          this.primeros_platos = element.menu.primr_plato;
          this.segundos_platos = element.menu.seg_plato;
          this.postres = element.menu.postre;
          this.bebidas = element.menu.bebidas;
        } else {
          this.routes.navigate(['crear_menu'])
        }
      })
    }, error => {
      console.log(error);
    });
  };

  openDialogEditUser(menuId: string) {
    const dialogEdit = this.dialog.open(DialogEditDeleteMenuComponent, { data: { id: menuId } });
    dialogEdit.afterClosed().subscribe(() => {
      this.getMenuRest();
    });
  }
}

