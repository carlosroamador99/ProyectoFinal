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
import {MatFormFieldModule} from '@angular/material/form-field';



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
    
    
  ],
  declarations: [ DashboardComponent, MenuRestComponent ],
  providers: [MenuRestService]
})

export class DashboardModule {}
