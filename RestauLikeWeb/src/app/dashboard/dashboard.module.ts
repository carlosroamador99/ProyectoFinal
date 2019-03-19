import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatExpansionModule} from '@angular/material/expansion';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { MenuRestComponent } from './menu-rest/menu-rest.component';
import { MenuRestService } from '../services/menu-rest.service';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { RestauranteService } from '../services/restaurante.service';
import {MatDialogModule} from '@angular/material/dialog';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogEditDeleteMenuComponent } from './dialog-edit-delete-menu/dialog-edit-delete-menu.component';
import { CrearMenuComponent } from './crear-menu/crear-menu.component';
import { EditarRestauranteComponent } from './editar-restaurante/editar-restaurante.component';
import { CRUDRestaturantesComponent } from './list-restaurantes/crudrestaturantes.component';
import { CRUDCategoriasComponent } from './list-categorias/crudcategorias.component';
import { DialogEditDeleteRestauranteComponent } from './dialog-edit-delete-restaurante/dialog-edit-delete-restaurante.component';
import { DialogEditDeleteUsuarioComponent } from './dialog-edit-delete-usuario/dialog-edit-delete-usuario.component';
import { DialogCreateUsuarioComponent } from './dialog-create-usuario/dialog-create-usuario.component';
import { DialogCreateRestauranteComponent } from './dialog-create-restaurante/dialog-create-restaurante.component';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';
import { UserService } from '../services/user-service.service';
import { CategoriasService } from '../services/categorias.service';
import { DialogCreateCategoriaComponent } from './dialog-create-categoria/dialog-create-categoria.component';
import { DialogEditDeleteCategoriaComponent } from './dialog-edit-delete-categoria/dialog-edit-delete-categoria.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    FormsModule,
    MatMenuModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    CdkTableModule,
    MatPaginatorModule,
    MatTableModule,
    MatSnackBarModule,
    ReactiveFormsModule
       
  ],
  declarations: [ DashboardComponent, MenuRestComponent, DialogEditDeleteMenuComponent, CrearMenuComponent, EditarRestauranteComponent, CRUDRestaturantesComponent, CRUDCategoriasComponent, DialogEditDeleteRestauranteComponent, DialogEditDeleteUsuarioComponent, DialogCreateUsuarioComponent, DialogCreateRestauranteComponent, ListUsuariosComponent, DialogCreateCategoriaComponent, DialogEditDeleteCategoriaComponent ],
  providers: [MenuRestService, RestauranteService, UserService, CategoriasService],
  entryComponents:[DialogEditDeleteMenuComponent, DialogEditDeleteRestauranteComponent, DialogCreateRestauranteComponent, DialogCreateUsuarioComponent, DialogEditDeleteUsuarioComponent, DialogCreateCategoriaComponent, DialogEditDeleteCategoriaComponent]
})

export class DashboardModule {}
