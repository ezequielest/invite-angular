import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: 'public', component: PublicComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PublicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
