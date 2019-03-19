import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { MatDialogRef } from '@angular/material';
import { UserDto } from 'src/app/dto/user.dto';

@Component({
  selector: 'app-dialog-create-usuario',
  templateUrl: './dialog-create-usuario.component.html',
  styleUrls: ['./dialog-create-usuario.component.scss']
})
export class DialogCreateUsuarioComponent implements OnInit {

  email: string;
  password: string;
  name: string;
  role: string;

  constructor(private userService: UserService, private dialogRef: MatDialogRef<DialogCreateUsuarioComponent>) { }

  ngOnInit() {
  }

  createUser(){
    const userDto = new UserDto(null,this.email, this.password, this.name, this.role, null);
    this.userService.crearUsuarios(userDto).subscribe(user =>{
      console.log(user);
      this.dialogRef.close();
    }, error =>{
      console.log(error);
    })
  }

}
