import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/menu/menu.service';
import { ListApiResponse } from 'src/app/interfaces/list-api-response.interface';
import { MenuRestDto } from 'src/app/dto/menu.dto';
import { MenuRestService } from 'src/app/services/menu-rest.service';
import { MenuRestResponse } from 'src/app/interfaces/menu-response.interface';

@Component({
  selector: 'app-menu-rest',
  templateUrl: './menu-rest.component.html',
  styleUrls: ['./menu-rest.component.scss']
})
export class MenuRestComponent implements OnInit {
  menu: MenuRestResponse;
  entrantes: string[];
  primeros_platos: string[];
  segundos_platos: string[];
  postres: string[];
  bebidas: string[];

  constructor(private menuRestService: MenuRestService) { }

  ngOnInit() {
    this.getMenuRest();
  }

  getMenuRest(){
    this.menuRestService.getMenu().subscribe(menu =>{
      this.menu = menu;
      console.log(this.menu);
      this.menu.entrantes = this.entrantes;
      this.menu.primr_plato = this.primeros_platos;
      this.menu.seg_plato = this.segundos_platos;
      this.menu.postre = this.postres;
      this.menu.bebidas = this.bebidas;  
      }, error => {
      console.log(error);
    });
  };

  }
  
