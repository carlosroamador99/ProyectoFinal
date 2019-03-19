import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MatDialogRef } from '@angular/material';
import { CategoriaDto } from 'src/app/dto/categoria.dto';

@Component({
  selector: 'app-dialog-create-categoria',
  templateUrl: './dialog-create-categoria.component.html',
  styleUrls: ['./dialog-create-categoria.component.scss']
})
export class DialogCreateCategoriaComponent implements OnInit {

  categoria: string;

  constructor(private categoriaService: CategoriasService, private dialogRef: MatDialogRef<DialogCreateCategoriaComponent>) { }

  ngOnInit() {
  }

  crearCategoria(){
    const categoriaDto = new CategoriaDto(this.categoria);
    this.categoriaService.createCategoria(categoriaDto).subscribe(()=>{
      this.dialogRef.close();
    }, error =>{
      console.log(error);
    })
  }

}
