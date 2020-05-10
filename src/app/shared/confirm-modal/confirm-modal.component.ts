import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input() message;
  @Output() confirm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  confirmado() {
    this.confirm.emit(true);
  }

}
