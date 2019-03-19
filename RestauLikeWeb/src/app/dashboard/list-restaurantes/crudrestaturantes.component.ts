import { Component, OnInit, ViewChild } from '@angular/core';
import { RestauranteResponse } from 'src/app/interfaces/restaurante-response.interface';
import { MatTableDataSource, MatPaginator, MatSnackBar, MatDialog } from '@angular/material';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { ListApiRestauranteResponse } from 'src/app/interfaces/list-api-response.interface';
import { DialogEditDeleteRestauranteComponent } from '../dialog-edit-delete-restaurante/dialog-edit-delete-restaurante.component';
import { RestauranteDto } from 'src/app/dto/restaurante.dto';
import { DialogCreateRestauranteComponent } from '../dialog-create-restaurante/dialog-create-restaurante.component';

@Component({
  selector: 'app-crudrestaturantes',
  templateUrl: './crudrestaturantes.component.html',
  styleUrls: ['./crudrestaturantes.component.scss']
})
export class CRUDRestaturantesComponent implements OnInit {

  listApiResponse: ListApiRestauranteResponse
  restauranteResponse: RestauranteResponse[];
  displayedColumns: string[] = ['id', 'nombre', 'calle', 'localizacion', 'cod_post', 'categoria', 'acciones', 'usuario'];
  dataSource = new MatTableDataSource<RestauranteResponse[]>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private restauranteService: RestauranteService, public snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    this.getRestaurantes();
  }


  getRestaurantes() {
    this.restauranteService.getAllRestaurante().subscribe(restaurantes => {
      this.listApiResponse = restaurantes;
      this.restauranteResponse = this.listApiResponse.rows;
      this.dataSource = new MatTableDataSource<RestauranteResponse[]>(this.listApiResponse.rows);
      this.dataSource.paginator = this.paginator

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

  openDialogEditDeleteRestaurante(element: RestauranteDto) {
    console.log(element);
    const dialogEdit = this.dialog.open(DialogEditDeleteRestauranteComponent, {width:'40%', data: { restaurante: element } });
    dialogEdit.afterClosed().subscribe(result => {
      this.getRestaurantes();
      console.log(result);
    });
  }

  openDialogCrearRestaurante() {
    const dialogCreate = this.dialog.open(DialogCreateRestauranteComponent, {width:'40%'});
    dialogCreate.afterClosed().subscribe(() => {
      this.getRestaurantes();
    });
  }
}

