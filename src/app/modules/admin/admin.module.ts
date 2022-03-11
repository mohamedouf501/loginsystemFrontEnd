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
import { UserDetailsComponent } from './user-details/user-details.component';
import {MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AdminComponent,
    DashboradComponent,
    NavbarAdminComponent,
    UserDetailsComponent,
    
    
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
    MatProgressSpinnerModule,
    MatPaginatorModule
    
    
    
  ]
  ,
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class AdminModule { }
