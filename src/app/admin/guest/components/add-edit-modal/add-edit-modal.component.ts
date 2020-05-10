import { Component, OnInit, EventEmitter, OnChanges, Output, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddEditGuest } from 'src/app/models/guest.model';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.scss']
})
export class AddEditModalComponent implements OnInit {

  currentCant: number;
  isEditing = false;

  guestForm = new FormGroup({
    description: new FormControl(''),
    cant: new FormControl(''),
    confirmed: new FormControl(false),
  });

  @Output() submitGuest = new EventEmitter();
  @Input() set guests(value){
    if (value) {
      this.isEditing = true;
      this.currentCant = value.cant;
      this.guestForm.controls.description.patchValue(value.description);
      this.guestForm.controls.cant.patchValue(value.cant);
      this.guestForm.controls.confirmed.patchValue(value.confirmed);
    } else {
      this.isEditing = false;
      this.currentCant = 1;
      this.guestForm.controls.description.patchValue('');
      this.guestForm.controls.cant.patchValue(1);
      this.guestForm.controls.confirmed.patchValue(false);
    }
  };

  constructor() { }

  ngOnInit(): void { }

  submitingGuest() {
    this.submitGuest.emit(this.guestForm);
  }

  sumar() { 
    if (this.currentCant < 10) {
      this.currentCant++;
      this.guestForm.controls.cant.patchValue(this.currentCant);
    }
  }

  restar() {
    if (this.currentCant > 1) {
      this.currentCant--;
      this.guestForm.controls.cant.patchValue(this.currentCant);
    }
  }


}
