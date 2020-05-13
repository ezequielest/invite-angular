import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-edit-custom-gift-modal',
  templateUrl: './add-edit-custom-gift-modal.component.html',
  styleUrls: ['./add-edit-custom-gift-modal.component.scss']
})
export class AddEditCustomGiftModalComponent implements OnInit {

  currentCant: number;
  isEditing = false;

  giftForm = new FormGroup({
    description: new FormControl(''),
    cant: new FormControl(''),
    isMoney: new FormControl(false),
  });

  @Output() submitGift = new EventEmitter();
  @Input() set gifts(value){
    if (value) {
      this.isEditing = true;
      this.currentCant = value.cant;
      this.giftForm.controls.description.patchValue(value.description);
      this.giftForm.controls.cant.patchValue(value.cant);
      this.giftForm.controls.isMoney.patchValue(value.isMoney);
    } else {
      this.isEditing = false;
      this.currentCant = 1;
      this.giftForm.controls.description.patchValue('');
      this.giftForm.controls.cant.patchValue(1);
      this.giftForm.controls.isMoney.patchValue(false);
    }
  };

  constructor() { }

  ngOnInit(): void { }

  submitingGift() {
    this.submitGift.emit(this.giftForm);
  }

}
