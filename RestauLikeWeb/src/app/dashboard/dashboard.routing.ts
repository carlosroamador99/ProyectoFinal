import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MenuRestComponent } from './menu-rest/menu-rest.component';

export const DashboardRoutes: Routes = [{
  path: '',
  children:[{
    path: 'menu-rest',
    component: MenuRestComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent,
}]  
}];
