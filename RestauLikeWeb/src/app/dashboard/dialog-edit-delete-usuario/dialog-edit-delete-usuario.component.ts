import { Component, OnInit, Inject } from '@angular/core';
import { UserDto } from 'src/app/dto/user.dto';
import { UserService } from 'src/app/services/user-service.service';
import { ListApiRestauranteResponse } from 'src/app/interfaces/list-api-response.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-edit-delete-usuario',
  templateUrl: './dialog-edit-delete-usuario.component.html',
  styleUrls: ['./dialog-edit-delete-usuario.component.scss']
})
export class DialogEditDeleteUsuarioComponent implements OnInit {
  lisApiResponse: ListApiRestauranteResponse;
  user: UserDto[];
  public form: FormGroup;

  constructor(private userService: UserService, private formB: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogEditDeleteUsuarioComponent>) { }

  ngOnInit() {
    this.user = this.data.user;
    this.form = this.formB.group({
      email: [this.data.user.email, Validators.compose([Validators.required])],
      name: [this.data.user.name, Validators.compose([Validators.required])],
      role: [this.data.user.role, Validators.compose([Validators.required])]
    });
  }

  editUser() {
    const userDto: UserDto = <UserDto>this.form.value;
    this.userService.editUser(this.data.user.id, userDto).subscribe(result => {
      console.log(result);
      this.dialogRef.close();
    }, error => {
      console.log(error);
    })
  }
  eliminarUser(){
    this.userService.deleteUsuario(this.data.user.id).subscribe(
      () => {
        this.dialogRef.close();
    }, error =>{
      console.log(error);
    })
  }
}
