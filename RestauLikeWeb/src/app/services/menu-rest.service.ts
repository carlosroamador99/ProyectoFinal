import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { ListApiRestauranteResponse } from '../interfaces/list-api-response.interface';
import { MenuRestResponse } from '../interfaces/menu-response.interface';
import { MenuRestDto } from '../dto/menu.dto';


const menuUrl = `${environment.apiUrl}/menus`;

@Injectable({
  providedIn: 'root'
})
export class MenuRestService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  crearMenu(dto: MenuRestDto): Observable<MenuRestResponse> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    console.log(dto);
    return this.http.post<MenuRestResponse>(`${menuUrl}`, dto, requestOptions);
  }

  editarMenu(id: string, dto: MenuRestDto) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    }
    return this.http.put(`${menuUrl}/${id}`, dto, requestOptions);
  }

  borrarMenu(id: string){
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.delete(`${menuUrl}/${id}`, requestOptions);
  }
}
