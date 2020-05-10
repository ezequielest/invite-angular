import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';



@NgModule({
  declarations: [
    ConfirmModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConfirmModalComponent
  ]
})
export class SharedModule { }
