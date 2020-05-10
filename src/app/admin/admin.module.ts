import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest/guest.component';
import { GiftComponent } from './gift/gift.component';
import { TableComponent } from './table/table.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AddEditModalComponent } from './guest/components/add-edit-modal/add-edit-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GuestComponent, 
    GiftComponent, 
    TableComponent,
    HeaderComponent,
    FooterComponent,
    AddEditModalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    AddEditModalComponent
  ]
})
export class AdminModule { }
