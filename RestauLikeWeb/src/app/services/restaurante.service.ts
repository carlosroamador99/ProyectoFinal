import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { ListApiResponse } from '../interfaces/list-api-response.interface';

  const restauranteUrl = `${environment.apiUrl}/restaurantes`;

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getRestaurante(): Observable<ListApiResponse>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'applicatio/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<ListApiResponse>(`${restauranteUrl}`,requestOptions);
  }
}
