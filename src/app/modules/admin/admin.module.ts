import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingspinnerComponent } from './../../shared/loadingspinner/loadingspinner.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AdminComponent,
    DashboradComponent,
    NavbarAdminComponent,
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule
    
    
    
  ]
  ,
  exports: [
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AdminModule { }
