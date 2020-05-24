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
import { SummaryGiftComponent } from './gift/summary-gift/summary-gift.component';
import { AddEditCustomGiftModalComponent } from './gift/components/add-edit-custom-gift-modal/add-edit-custom-gift-modal.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    GuestComponent, 
    GiftComponent, 
    TableComponent,
    HeaderComponent,
    FooterComponent,
    AddEditModalComponent,
    SummaryGiftComponent,
    AddEditCustomGiftModalComponent,
    SummaryComponent
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
