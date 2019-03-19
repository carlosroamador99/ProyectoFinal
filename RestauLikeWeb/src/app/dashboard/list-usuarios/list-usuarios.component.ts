import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { MatDialog, MatSnackBar, MatTableDataSource, MatPaginator } from '@angular/material';
import { ListApiRestauranteResponse } from 'src/app/interfaces/list-api-response.interface';
import { RestauranteResponse } from 'src/app/interfaces/restaurante-response.interface';
import { UserResponse } from 'src/app/interfaces/user-response.interface';
import { UserDto } from 'src/app/dto/user.dto';
import { DialogEditDeleteUsuarioComponent } from '../dialog-edit-delete-usuario/dialog-edit-delete-usuario.component';
import { DialogCreateUsuarioComponent } from '../dialog-create-usuario/dialog-create-usuario.component';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.scss']
})
export class ListUsuariosComponent implements OnInit {

  listApiResponse: ListApiRestauranteResponse
  userResponse: UserResponse[];
  displayedColumns: string[] = ['id', 'email', 'name', 'role', 'acciones'];
  dataSource = new MatTableDataSource<UserResponse[]>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService, private dialog: MatDialog, public snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsuarios().subscribe(users =>{
      this.listApiResponse = users;
      this.userResponse = this.listApiResponse.rows;
      console.log(this.userResponse);
      this.dataSource = new MatTableDataSource<UserResponse[]>(this.listApiResponse.rows);
      this.dataSource.paginator = this.paginator
    }, error => {
      console.log(error);
      this.snackBar.open('Error', 'Cerrar', {
        duration: 1000
      });
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  openDialogEditDeleteUser(element: UserDto) {
    console.log(element);
    const dialogEdit = this.dialog.open(DialogEditDeleteUsuarioComponent, {width:'30%', data: { user: element } });
    dialogEdit.afterClosed().subscribe(result => {
      this.getUsers();
      console.log(result);
    });
  }
  openDialogCrearUser() {
    const dialogCreate = this.dialog.open(DialogCreateUsuarioComponent, {width:'30%'});
    dialogCreate.afterClosed().subscribe(result => {
      this.getUsers();
      console.log(result);
    });
  }
}
