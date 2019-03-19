import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MenuRestComponent } from './menu-rest/menu-rest.component';
import { AuthService } from '../services/auth.service';
import { CrearMenuComponent } from './crear-menu/crear-menu.component';
import { EditarRestauranteComponent } from './editar-restaurante/editar-restaurante.component';
import { CRUDRestaturantesComponent } from './list-restaurantes/crudrestaturantes.component';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';
import { CRUDCategoriasComponent } from './list-categorias/crudcategorias.component';

export const DashboardRoutes: Routes = [{
  path: '',
  children:[{
    path: 'menu-rest',
    component: MenuRestComponent,
  }, {
    path: 'dashboard',
    component: DashboardComponent,
}, {
  path: 'crear_menu',
  component: CrearMenuComponent,
}, {
  path: 'edit_rest',
  component: EditarRestauranteComponent,
}, {
  path: 'lista_restaurantes',
  component: CRUDRestaturantesComponent,
}, {
  path: 'lista_users',
  component: ListUsuariosComponent,
}, {
  path: 'lista_categorias',
  component: CRUDCategoriasComponent,
}]  
}];
