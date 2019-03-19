import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CategoriaResponse } from '../interfaces/categoria-response.interface';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { CategoriaDto } from '../dto/categoria.dto';
import { ListApiRestauranteResponse } from '../interfaces/list-api-response.interface';


const categoriaUrl = `${environment.apiUrl}/categorias`

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  createCategoria(categoria: CategoriaDto): Observable<CategoriaResponse> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post<CategoriaResponse>(`${categoriaUrl}`, categoria, requestOptions);
  }

  getAllCategoria(): Observable<ListApiRestauranteResponse> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<ListApiRestauranteResponse>(`${categoriaUrl}`, requestOptions);
  }

  getOneCategoria(categoriaId: string): Observable<CategoriaResponse> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<CategoriaResponse>(`${categoriaUrl}/${categoriaId}`, requestOptions);
  }

  deleteCategoria(categoriaId: string) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.delete<CategoriaResponse>(`${categoriaUrl}/${categoriaId}`, requestOptions);
  }

  editCategoria(categoria: CategoriaDto, categoriaId: string): Observable<CategoriaResponse> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.put<CategoriaResponse>(`${categoriaUrl}/${categoriaId}`, categoria, requestOptions);
  }
}
