import { Component } from '@angular/core';
import { CategoriaDto } from '../dto/categoria.dto';
import { UrlImagenDto } from '../dto/url-imagen.dto';
import { MenuRestDto } from '../dto/menu.dto';
import { ComentarioDto } from '../dto/comentario.dto';
import { RestauranteService } from '../services/restaurante.service';
import { RestauranteResponse } from '../interfaces/restaurante-response.interface';
import { element } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    restauranteResponse: RestauranteResponse[];
    id: string;
    nombre: string;
    calle: string;
    descripcion: string;
    localizacion: string;
    horario: string;
    cod_post: string;
    categoria: CategoriaDto;
    url_imagen: UrlImagenDto;
    menu: MenuRestDto;
    comentario: ComentarioDto;
     
    constructor(private restauranteService: RestauranteService, private router: Router){}

    ngOnInit(): void {
      this.getRestaurante();
    }

    getRestaurante(){
      this.restauranteService.getRestaurante().subscribe(restaurante =>{
        console.log(restaurante);
        this.restauranteResponse = <RestauranteResponse[]>restaurante.rows;
        restaurante.rows.forEach(element =>{
          console.log(element);
          this.nombre = element.nombre;
          this.calle = element.calle;
          this.descripcion = element.descripcion;
          this.localizacion = element.localizacion;
          this.horario = element.horario;
          this.cod_post = element.cod_post;
          this.url_imagen = element.url_imagen;          
          this.categoria = element.categoria;
        });
      }, error =>{
        console.log(error);
      });
    }
    editarMenu(){
      this.router.navigate(['edit_rest']);
    }
}
