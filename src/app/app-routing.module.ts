import { RoutingAnimation } from './shared/Animations/RoutingAnimation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ChangeNameComponent } from './coreModule/change-name/change-name.component';
import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './coreModule/home/home.component';
import { LoginComponent } from './coreModule/login/login.component';
import { NotfoundComponent } from './coreModule/notfound/notfound.component';
import { ProfileComponent } from './coreModule/profile/profile.component';
import { RegistrationComponent } from './coreModule/registration/registration.component';
import { AuthGuard } from './Guards/auth.guard';
import { ChangePasswordComponent } from './coreModule/change-password/change-password.component';
import { ResetPasswordComponent } from './coreModule/reset-password/reset-password.component';
import { PreloadAllModules } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'home', canActivate:[AuthGuard] , component: HomeComponent , data: { animation: 'RoutingAnimation' } },
  { path: 'signin', component: LoginComponent, data: { animation: 'RoutingAnimation' } },
  { path: 'signup', component: RegistrationComponent , data: { animation: 'RoutingAnimation' }},
  { path: 'resetpassword', component: ResetPasswordComponent , data: { animation: 'RoutingAnimation' }},
  { path: 'Profile', canActivate:[AuthGuard], component: ProfileComponent },
  { path: 'admin', canActivate:[AuthGuard], loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', component:NotfoundComponent}
];
 
@NgModule({
  imports: [ BrowserModule,BrowserAnimationsModule,  RouterModule.forRoot(routes ,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
