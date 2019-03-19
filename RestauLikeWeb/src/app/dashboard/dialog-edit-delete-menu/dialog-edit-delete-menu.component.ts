import { Component, OnInit } from '@angular/core';
import { MenuRestService } from 'src/app/services/menu-rest.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MenuRestDto } from 'src/app/dto/menu.dto';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { RestauranteResponse } from 'src/app/interfaces/restaurante-response.interface';

@Component({
  selector: 'app-dialog-edit-delete-menu',
  templateUrl: './dialog-edit-delete-menu.component.html',
  styleUrls: ['./dialog-edit-delete-menu.component.scss']
})
export class DialogEditDeleteMenuComponent implements OnInit {
  restauranteResponse: RestauranteResponse[];
  id : string;
  entrantes: string[];
  primeros_platos: string[];
  segundos_platos: string[];
  postres: string[];
  bebidas: string[];

  constructor(private restauranteService: RestauranteService, private menuService: MenuRestService, private dialogRef: MatDialogRef<DialogEditDeleteMenuComponent>) { }

  ngOnInit() {
    this.getMenuRest();
  }

  getMenuRest(){
    this.restauranteService.getRestaurante().subscribe(menu =>{
      this.restauranteResponse = <RestauranteResponse[]>menu.rows;
      menu.rows.forEach(element =>{
        this.id = element.menu.id;
        this.entrantes = element.menu.entrantes;
        this.primeros_platos = element.menu.primr_plato;
        this.segundos_platos = element.menu.seg_plato;
        this.postres = element.menu.postre;
        this.bebidas = element.menu.bebidas;
        console.log(this.id)  
      })
      }, error => {
      console.log(error);
    });
  };

  editMenu(){
    const dto = new MenuRestDto(this.entrantes, this.primeros_platos, this.segundos_platos, this.postres, this.bebidas)
    console.log(dto);  
    this.menuService.editarMenu(this.id, dto).subscribe(result =>{
      console.log(result);
      console.log(this.id);
      this.dialogRef.close();
    }, error =>{
      console.log(error);
    });
  }

  borrarMenu(){
    this.menuService.borrarMenu(this.id).subscribe(result=>{
      this.getMenuRest();
      this.dialogRef.close();
    }, error =>{
      console.log(error);
    });
  }

}
