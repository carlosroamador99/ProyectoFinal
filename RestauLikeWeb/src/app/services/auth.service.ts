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
    localStorage.setItem('name', LoginResponse.name);
    localStorage.setItem('email', LoginResponse.email);
    localStorage.setItem('role', LoginResponse.role);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getTokenDecode() {
    if (!(this.getToken() == null)) {
      return jwtDecode(this.getToken());
    } else {
      return null;
    }
  }

  isAdmin(){
    if(!(this.getTokenDecode() == null)){
      if(this.getTokenDecode().role === 'admin'){
        return true;
      } else{
        return false;
      }
    } else {
      return false;
    }
  }

  logOut(){
    localStorage.clear();
  }
}
