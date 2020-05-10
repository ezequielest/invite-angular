import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminModule } from './admin/admin.module';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
