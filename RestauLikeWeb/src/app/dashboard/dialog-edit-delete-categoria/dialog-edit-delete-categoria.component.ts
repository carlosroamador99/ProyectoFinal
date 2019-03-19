import { Component, OnInit, Inject } from '@angular/core';
import { CategoriaResponse } from 'src/app/interfaces/categoria-response.interface';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ListApiRestauranteResponse } from 'src/app/interfaces/list-api-response.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogEditDeleteRestauranteComponent } from '../dialog-edit-delete-restaurante/dialog-edit-delete-restaurante.component';
import { CategoriaDto } from 'src/app/dto/categoria.dto';

@Component({
  selector: 'app-dialog-edit-delete-categoria',
  templateUrl: './dialog-edit-delete-categoria.component.html',
  styleUrls: ['./dialog-edit-delete-categoria.component.scss']
})
export class DialogEditDeleteCategoriaComponent implements OnInit {

  lisApiResponse: ListApiRestauranteResponse;
  categoria: CategoriaResponse[];
  public form: FormGroup;

  constructor(private categoriaService: CategoriasService, private formB: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogEditDeleteRestauranteComponent>) { }

  ngOnInit() {
    this.categoria = this.data.categoria;
    console.log(this.data.categoria.id);
    this.form = this.formB.group({
      categoria: [this.data.categoria.categoria, Validators.compose([Validators.required])]
    });
  }

  editarCategoria() {
    const categoriaDto: CategoriaDto = <CategoriaDto>this.form.value;
    console.log(this.data.categoria.id);
    this.categoriaService.editCategoria(categoriaDto, this.data.categoria.id).subscribe(
      () => {
        this.dialogRef.close();
      }, error => {
        console.log(error);
      });
  }
  eliminarCategoria(){
    this.categoriaService.deleteCategoria(this.data.categoria.id).subscribe(
      () => {
        this.dialogRef.close();
    }, error =>{
      console.log(error);
    })
  }

}
