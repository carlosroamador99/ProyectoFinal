import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginDto } from '../dto/login.dto';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response.interface';

  const jwtDecode = require('jwt-decode');

  const authUrl = `${environment.apiUrl}/auth`; //angular
  const master_key = `${environment.MASTER_KEY}`
  
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}
  

  login(loginDto: LoginDto): Observable<LoginResponse>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ` + btoa(`${loginDto.email}:${loginDto.password}`),
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post<LoginResponse>(`${authUrl}?access_token=${master_key}`, null, requestOptions);
  }

  setLoginData(LoginResponse: LoginResponse) {
    localStorage.setItem('token', LoginResponse.token);
    localStorage.setItem('name', LoginResponse.user.name);
    localStorage.setItem('email', LoginResponse.user.email);
    localStorage.setItem('role', LoginResponse.user.role);
    localStorage.setItem('userId', LoginResponse.user.id);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getUserId(): string {
    return localStorage.getItem('userId');
  }

  getTokenDecode() {
    if (this.getToken() != null) {
      console.log(jwtDecode(this.getToken()));
      return jwtDecode(this.getToken());
    } else {
      return null;
    }
  }

  isAdmin(){
    const role = localStorage.getItem('role');
    if( role != null){
      if(role === 'admin'){
        return 1;
      } else if (role === 'superadmin'){
        return 2;
      }
    } else {
      return false;
    }
  }
}
