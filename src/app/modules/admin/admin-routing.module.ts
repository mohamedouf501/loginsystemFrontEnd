import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboradComponent } from './dashborad/dashborad.component';

const routes: Routes = [{ path: '', component: AdminComponent },
  { path: 'dashborad', component: DashboradComponent }];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
