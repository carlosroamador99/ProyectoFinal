import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoginDto } from 'src/app/dto/login.dto';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  email: string;
  password: string;

  public form: FormGroup;
  constructor(private authService:AuthService, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  doLogin() {
    const loginDto = new LoginDto(this.email, this.password);
    this.authService.login(loginDto).subscribe(loginResp => {
      console.log(loginResp);
      this.authService.setLoginData(loginResp);

    if(this.authService.isAdmin){
      this.router.navigate(['dashboard/']);
    } else {
      console.error('No eres admin');
    }        
    }, error => {
      console.log('Error en petición de login');
      console.log(error);
    });
  }
  validateEmail(): boolean {
    const emailRegExpr = new RegExp('[a-zA-Z0-9-]{1,}@([a-zA-Z\.])?[a-zA-Z]{1,}\.[a-zA-Z]{1,4}');
    return emailRegExpr.test(this.email);
  }

}
