import { Injectable } from '@angular/core';
import { state } from '@angular/animations';
import { AuthService } from 'src/app/services/auth.service';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}


const MENUITEMS = [
  {
    state: 'dashboard',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  },
  {
    state: 'menu-rest',
    name: 'Menú',
    type: 'link',
    icon: 'local_library'
  }]
  const MENUITEMS2 = [
  {
    state: 'lista_restaurantes',
    name: 'Lista Restaurantes',
    type: 'link',
    icon: 'store_mall_directory'
  },
  {
    state: 'lista_users',
    name: 'Lista Usuarios',
    type: 'link',
    icon: 'face'
  },
  {
    state: 'lista_categorias',
    name: 'Lista Categorias',
    type: 'link',
    icon: 'ballot'
  }
];

@Injectable()
export class MenuService {

  constructor(private authService: AuthService){}

  getAll(): Menu[] {
      if(this.authService.isAdmin() == 1){
    return MENUITEMS;
      } else if (this.authService.isAdmin() == 2){
        return MENUITEMS2;
      } else {
        return null;
      }
  }

  add(menu) {
    MENUITEMS.push(menu);
  }
}
