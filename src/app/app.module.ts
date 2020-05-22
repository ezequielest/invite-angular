import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';
import { AdminModule } from './admin/admin.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthLogin } from './core/authLogin.interceptor';
import { AuthService } from './core/auth.service';
import { AuthGuardService } from './core/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PublicComponent,
    LoginComponent
  ],
  imports: [
    AdminModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthLogin, multi: true },
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
