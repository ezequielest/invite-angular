import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestComponent } from './guest/guest.component';
import { GiftComponent } from './gift/gift.component';
import { AdminComponent } from './admin.component';
import { TableComponent } from './table/table.component';
import { ManageGiftComponent } from './gift/manage-gift/manage-gift.component';
import { SummaryGiftComponent } from './gift/summary-gift/summary-gift.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: 'admin', 
    component: AdminComponent,
    children: [
        { path: '', component: SummaryComponent },
        { path: 'summary', component: SummaryComponent },
        { path: 'guest', component: GuestComponent },
        { path: 'gift', component: ManageGiftComponent },
        /*{ path: 'gift', component: GiftComponent,
          children: [
            { path: 'manage', component: ManageGiftComponent },
            { path: '', component: SummaryGiftComponent },
            { path: '**', component: SummaryGiftComponent },
        ]},*/
        { path: 'table', component: TableComponent },
        { path: '**', component: GuestComponent },
    ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
