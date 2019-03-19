import { Component, OnInit, ViewChild } from '@angular/core';
import { RestauranteResponse } from 'src/app/interfaces/restaurante-response.interface';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { ListApiRestauranteResponse } from 'src/app/interfaces/list-api-response.interface';
import { MatTableDataSource, MatPaginator, MatSnackBar, MatDialog } from '@angular/material';
import { CategoriaResponse } from 'src/app/interfaces/categoria-response.interface';
import { CategoriasService } from 'src/app/services/categorias.service';
import { CategoriaDto } from 'src/app/dto/categoria.dto';
import { DialogEditDeleteCategoriaComponent } from '../dialog-edit-delete-categoria/dialog-edit-delete-categoria.component';
import { DialogCreateCategoriaComponent } from '../dialog-create-categoria/dialog-create-categoria.component';

@Component({
  selector: 'app-crudcategorias',
  templateUrl: './crudcategorias.component.html',
  styleUrls: ['./crudcategorias.component.scss']
})
export class CRUDCategoriasComponent implements OnInit {

  listApiResponse: ListApiRestauranteResponse
  categoriaResponse: CategoriaResponse[];
  displayedColumns: string[] = ['id', 'categoria', 'acciones'];
  dataSource = new MatTableDataSource<CategoriaResponse[]>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private categoriaService: CategoriasService, public snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias() {
    this.categoriaService.getAllCategoria().subscribe(categoria => {
      this.listApiResponse = categoria;
      this.categoriaResponse = this.listApiResponse.rows
      this.dataSource = new MatTableDataSource<CategoriaResponse[]>(this.listApiResponse.rows);
      this.dataSource.paginator = this.paginator;
    }, error => {
      console.log(error);
      this.snackBar.open('Error al obtener categorias', 'Cerrar', {
        duration: 1000
      });
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogEditDeleteCategoria(element: CategoriaDto) {
    console.log(element);
    const dialogEdit = this.dialog.open(DialogEditDeleteCategoriaComponent, {width:'40%', data: { categoria: element } });
    dialogEdit.afterClosed().subscribe(() => {
      this.getCategorias();
    });
  }

  openDialogCrearRestaurante() {
    const dialogCreate = this.dialog.open(DialogCreateCategoriaComponent, {width:'40%'});
    dialogCreate.afterClosed().subscribe(() => {
      this.getCategorias();
    });
  }
}
