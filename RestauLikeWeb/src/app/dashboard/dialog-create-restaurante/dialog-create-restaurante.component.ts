import { Component, OnInit } from '@angular/core';
import { CategoriaDto } from 'src/app/dto/categoria.dto';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { RestauranteDto } from 'src/app/dto/restaurante.dto';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserDto } from 'src/app/dto/user.dto';
import { UrlImagenDto } from 'src/app/dto/url-imagen.dto';
import { MenuRestResponse } from 'src/app/interfaces/menu-response.interface';
import { ComentarioDto } from 'src/app/dto/comentario.dto';


@Component({
  selector: 'app-dialog-create-restaurante',
  templateUrl: './dialog-create-restaurante.component.html',
  styleUrls: ['./dialog-create-restaurante.component.scss']
})
export class DialogCreateRestauranteComponent implements OnInit {

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

  constructor(private restauranteService: RestauranteService, private dialogRef: MatDialogRef<DialogCreateRestauranteComponent>) { }

  ngOnInit() {
  }

  crearRestaurante(){
    const dto = new RestauranteDto(this.id, this.nombre, this.calle, this.descripcion, this.localizacion, this.horario, this.cod_post, this.categoria, this.url_imagen, this.menu, this.comentario, this.user._id);    
    this.restauranteService.crearRestaurante(dto).subscribe(result=>{
      console.log(result);
      this.dialogRef.close();
    }, error =>{
      console.log(error);
    })
  }
}
