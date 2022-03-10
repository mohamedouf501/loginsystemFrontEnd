import { HeaderInterceptorInterceptor } from './Interceptor/header-interceptor.interceptor';
import { LoadingspinnerComponent } from './shared/loadingspinner/loadingspinner.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './coreModule/login/login.component';
import { RegistrationComponent } from './coreModule/registration/registration.component';
import { HomeComponent } from './coreModule/home/home.component';
import { NavbarComponent } from './coreModule/navbar/navbar.component';
import { NotfoundComponent } from './coreModule/notfound/notfound.component';
import { FooterComponent } from './coreModule/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './coreModule/profile/profile.component';
import { ChangeNameComponent } from './coreModule/change-name/change-name.component';
import { ChangePasswordComponent } from './coreModule/change-password/change-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { ChangeAgeComponent } from './coreModule/change-age/change-age.component';
import { ResetPasswordComponent } from './coreModule/reset-password/reset-password.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    FooterComponent,
    ProfileComponent,
    LoadingspinnerComponent,
    ChangeNameComponent,
    ChangePasswordComponent,
    ChangeAgeComponent,
    ResetPasswordComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTableModule,
  ],
  exports:[LoadingspinnerComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
