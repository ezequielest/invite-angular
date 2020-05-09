import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestComponent } from './guest/guest.component';
import { GiftComponent } from './gift/gift.component';
import { AdminComponent } from './admin.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'admin', 
    component: AdminComponent,
    children: [
        { path: 'guest', component: GuestComponent },
        { path: 'gift', component: GiftComponent },
        { path: 'table', component: TableComponent },
        { path: '', component: GiftComponent },
        { path: '**', component: GuestComponent },
    ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
