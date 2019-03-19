import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { ListApiRestauranteResponse } from '../interfaces/list-api-response.interface';
import { RestauranteResponse } from '../interfaces/restaurante-response.interface';
import { IdMenuDto } from '../dto/idMenu.dto';
import { RestauranteEditDto } from '../dto/restaurante-edit.dto';
import { RestauranteDto } from '../dto/restaurante.dto';

const restauranteUrl = `${environment.apiUrl}/restaurantes`;

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  crearRestaurante(dto: RestauranteDto): Observable<RestauranteResponse>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post<RestauranteResponse>(`${restauranteUrl}`, dto, requestOptions);

  }

  getRestaurante(): Observable<ListApiRestauranteResponse> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    const idUser = this.authService.getUserId();
    console.log(this.authService.getUserId());
    return this.http.get<ListApiRestauranteResponse>(`${restauranteUrl}?user=${idUser}`, requestOptions);
  }

  getOneRestaurante(id: string): Observable<ListApiRestauranteResponse> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<ListApiRestauranteResponse>(`${restauranteUrl}/${id}`, requestOptions);
  }

  getAllRestaurante(): Observable<ListApiRestauranteResponse> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    const idUser = this.authService.getUserId();
    return this.http.get<ListApiRestauranteResponse>(`${restauranteUrl}`, requestOptions);
  }

  updateRestaurante(idRestaurante: string, menu: IdMenuDto): Observable<RestauranteResponse> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        //'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.put<RestauranteResponse>(`${restauranteUrl}/menu/${idRestaurante}`, menu, requestOptions);
  }

  editRestaurante(id: string, dto: RestauranteDto): Observable<RestauranteResponse> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        //'Access-Control-Allow-Origin': '*'
      })
    };
    console.log(id);
    console.log(dto);
    return this.http.put<RestauranteResponse>(`${restauranteUrl}/${id}`, dto, requestOptions);
  }

  deleteRestaurante(id: string) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        //'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.delete<RestauranteResponse>(`${restauranteUrl}/${id}`, requestOptions);
  }
}
