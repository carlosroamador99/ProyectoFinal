import { Component, OnInit } from '@angular/core';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { RestauranteResponse } from 'src/app/interfaces/restaurante-response.interface';
import { RestauranteDto } from 'src/app/dto/restaurante.dto';
import { Router } from '@angular/router';
import { RestauranteEditDto } from 'src/app/dto/restaurante-edit.dto';
import { UserDto } from 'src/app/dto/user.dto';
import { CategoriaDto } from 'src/app/dto/categoria.dto';
import { UrlImagenDto } from 'src/app/dto/url-imagen.dto';
import { MenuRestResponse } from 'src/app/interfaces/menu-response.interface';
import { ComentarioDto } from 'src/app/dto/comentario.dto';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-editar-restaurante',
  templateUrl: './editar-restaurante.component.html',
  styleUrls: ['./editar-restaurante.component.scss']
})
export class EditarRestauranteComponent implements OnInit {

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
  menu: MenuRestResponse;
  comentario: ComentarioDto;
  user: UserDto;

  constructor(private restauranteService: RestauranteService, private router: Router) { }

  ngOnInit() {
    this.getRestaurante();
  }

  getRestaurante() {
    this.restauranteService.getRestaurante().subscribe(restaurante => {
      console.log(restaurante)
      this.restauranteResponse = <RestauranteResponse[]>restaurante.rows;
      restaurante.rows.forEach(element => {
        
        this.id = element.id;
        this.nombre = element.nombre;
        this.calle = element.calle;
        this.descripcion = element.descripcion;
        this.localizacion = element.localizacion;
        this.horario = element.horario;
        this.cod_post = element.cod_post;
        this.categoria = element.categoria;
        this.url_imagen = element.url_imagen;
        this.menu = element.menu;
        this.comentario = element.comentario;
        this.user = element.user;
        console.log(this.user._id)
      });
    });
  }

  editRestaurante() {
    console.log(this.user);
    const dto = new RestauranteDto(this.id, this.nombre, this.calle, this.descripcion, this.localizacion, this.horario, this.cod_post, this.categoria, this.url_imagen, this.menu, this.comentario, this.user._id);
    console.log(dto);
    this.restauranteService.editRestaurante(this.id, dto).subscribe(result => {
      console.log(result)
      this.router.navigate(['dashboard'])
    }, error => {
      console.log(error);
    });
  }
}
