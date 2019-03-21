import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { UserDto } from '../dto/user.dto';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserResponse } from '../interfaces/user-response.interface';
import { ListApiRestauranteResponse } from '../interfaces/list-api-response.interface';


const usuarioUrl = `${environment.apiUrl}/users`

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  crearUsuarios(dto: UserDto): Observable<UserResponse> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    console.log(this.authService.getToken());
    return this.http.post<UserResponse>(`${usuarioUrl}?access_token=${environment.MASTER_KEY}`, dto, requestOptions);
  }

  deleteUsuario(id: string) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.delete<UserResponse>(`${usuarioUrl}/${id}`, requestOptions);
  }

  editUser(id: string, dto: UserDto) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    console.log(this.authService.getToken());
    return this.http.put<UserResponse>(`${usuarioUrl}/${id}`, dto, requestOptions);
  }

  getUsuarios(): Observable<ListApiRestauranteResponse>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<ListApiRestauranteResponse>(`${usuarioUrl}`,requestOptions);
  
  }

  getOneUsuarios(id: string): Observable<UserResponse>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<UserResponse>(`${usuarioUrl}/${id}`, requestOptions);
  
  }
}
