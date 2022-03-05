import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboradComponent } from './dashborad/dashborad.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboradComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
  ,
  exports: [DashboradComponent]
})
export class AdminModule { }
