import { Component, OnInit } from '@angular/core';
import { MenuRestService } from 'src/app/services/menu-rest.service';
import { MenuRestDto } from 'src/app/dto/menu.dto';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { element } from 'protractor';
import { RestauranteResponse } from 'src/app/interfaces/restaurante-response.interface';
import { IdMenuDto } from 'src/app/dto/idMenu.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-menu',
  templateUrl: './crear-menu.component.html',
  styleUrls: ['./crear-menu.component.scss']
})
export class CrearMenuComponent implements OnInit {
  restauranteResponse: RestauranteResponse[];
  restauranteId: string;
  id: string;
  entrantes: string[];
  primeros_platos: string[];
  segundos_platos: string[];
  postres: string[];
  bebidas: string[];

  constructor(private menuService: MenuRestService, private restauranteService: RestauranteService, private routes: Router) { }

  ngOnInit() {
    this.getRestaurante();
  }

  getRestaurante(){
    this.restauranteService.getRestaurante().subscribe(restaurante =>{
      this.restauranteResponse = <RestauranteResponse[]>restaurante.rows;
      restaurante.rows.forEach(element =>{
        this.restauranteId = element.id;
        console.log(element);
      })
    })
  }
  

  crearMenu() {
    //this.entrantes.forEach(entrante =>{})
    const dto = new MenuRestDto(this.entrantes, this.primeros_platos, this.segundos_platos, this.postres, this.bebidas)
    console.log(dto);
    this.menuService.crearMenu(dto).subscribe(result =>{
      console.log(result.id);
      const menuId = new IdMenuDto(result.id);
      this.restauranteService.updateRestaurante(this.restauranteId, menuId).subscribe(result2 =>{
        this.routes.navigate(['menu-rest'])
        console.log(result2);
    });
      console.log(result);
    }, error =>{
      console.log(error);
    });
}
}
