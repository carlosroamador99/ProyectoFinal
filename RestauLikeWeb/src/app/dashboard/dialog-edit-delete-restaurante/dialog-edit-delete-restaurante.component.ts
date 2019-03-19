import { Component, OnInit, Inject } from '@angular/core';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { ListApiRestauranteResponse } from 'src/app/interfaces/list-api-response.interface';
import { RestauranteResponse } from 'src/app/interfaces/restaurante-response.interface';
import { CategoriaDto } from 'src/app/dto/categoria.dto';
import { UrlImagenDto } from 'src/app/dto/url-imagen.dto';
import { MenuRestResponse } from 'src/app/interfaces/menu-response.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestauranteDto } from 'src/app/dto/restaurante.dto';


@Component({
  selector: 'app-dialog-edit-delete-restaurante',
  templateUrl: './dialog-edit-delete-restaurante.component.html',
  styleUrls: ['./dialog-edit-delete-restaurante.component.scss']
})
export class DialogEditDeleteRestauranteComponent implements OnInit {

  lisApiResponse: ListApiRestauranteResponse;
  restaurante: RestauranteDto[];
  public form: FormGroup;

  constructor(private restauranteService: RestauranteService, private formB: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<DialogEditDeleteRestauranteComponent>) { }

  ngOnInit() {
    this.restaurante = this.data.restaurante;
    this.form = this.formB.group({
      nombre: [this.data.restaurante.nombre, Validators.compose([Validators.required])],
      calle: [this.data.restaurante.calle, Validators.compose([Validators.required])],
      descripcion: [this.data.restaurante.descripcion, Validators.compose([Validators.required])],
      localizacion: [this.data.restaurante.localizacion, Validators.compose([Validators.required])],
      horario: [this.data.restaurante.horario, Validators.compose([Validators.required])],
      cod_post: [this.data.restaurante.cod_post, Validators.compose([Validators.required])],
      user: [this.data.restaurante.user, Validators.compose([Validators.required])]
    });
  }

  editarRest() {
    const restauranteDto: RestauranteDto = <RestauranteDto>this.form.value;
    console.log(restauranteDto);
    console.log(this.data.restaurante.id);
    this.restauranteService.editRestaurante(this.data.restaurante.id, restauranteDto).subscribe(
      () => {
        this.dialogRef.close();
      }, error => {
        console.log(error);
      });
  }
  eliminarRest(){
    this.restauranteService.deleteRestaurante(this.data.restaurante.id).subscribe(
      () => {
        this.dialogRef.close();
    }, error =>{
      console.log(error);
    })
  }
}
