import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { ListApiResponse } from '../interfaces/list-api-response.interface';
import { MenuRestResponse } from '../interfaces/menu-response.interface';


const menuUrl = `${environment.apiUrl}/menus`;

@Injectable({
  providedIn: 'root'
})
export class MenuRestService {

  constructor(private http: HttpClient, private authSevice: AuthService) { }

  getMenu(): Observable<MenuRestResponse>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'applicatio/json',
        'Authorization': `Bearer ${this.authSevice.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<MenuRestResponse>(`${menuUrl}`, requestOptions); 
  }
}
