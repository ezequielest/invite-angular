import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'public', component: PublicComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: PublicComponent },
  { path: '**', component: PublicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
