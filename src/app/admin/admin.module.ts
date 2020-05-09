import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest/guest.component';
import { GiftComponent } from './gift/gift.component';
import { TableComponent } from './table/table.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    GuestComponent, 
    GiftComponent, 
    TableComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class AdminModule { }
