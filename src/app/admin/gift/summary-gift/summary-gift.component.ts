import { Component, OnInit } from '@angular/core';
import { GiftService } from '../../services/gift.service';
import { Gift, GetGiftPrivate, GiftPrivate, GiftSummary, GetSummary } from 'src/app/models/gift.model';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { getSummary } from 'src/app/models/summary.model';

declare var $;

@Component({
  selector: 'app-summary-gift',
  templateUrl: './summary-gift.component.html',
  styleUrls: ['./summary-gift.component.scss']
})
export class SummaryGiftComponent implements OnInit {

  constructor(private giftService: GiftService) { }

  giftSummary: Array<GiftSummary>;
  giftEdit: GiftSummary = null;
  giftDelete: GiftSummary;
  messageConfirm: string;

  ngOnInit(): void {
    this.getUserGift();
  }

  getUserGift() {
    this.giftService.getSummary().subscribe((res: GetSummary)=> {
      this.giftSummary = res.response;
    });
  }

  togglePanel(panel) {
    $('#'+panel).collapse(); 
  }

  confirmationModal(res) {
    if (res) {
      this.giftService.deleteGift(this.giftDelete._id).pipe(
        switchMap(()=>{
          $('#confirmModal').modal('hide')
          return this.giftService.getUserGift();
        })
      ).subscribe((res: GetSummary) => {
        this.giftSummary = res.response;
      });

    }
  }

  add() {
    this.giftEdit =  null;
  }

  edit(i) {
    this.giftEdit =  this.giftSummary[i];
  }

  delete(i) {
    this.giftDelete =  this.giftSummary[i];
    this.messageConfirm = "Esta seguro de que quiere eliminar el regalo: " + this.giftDelete.description + " ?";
  }

  submitGift(form: FormControl){
    if (this.giftEdit) {
      this.giftService.editGift(this.giftEdit._id, form.value).pipe(
        switchMap(() => {
          $('#addEditGiftModal').modal('hide')
          return this.giftService.getUserGift();
        })
      ).subscribe((res: GetSummary) => {
        this.giftSummary = res.response;
      });
    } else {
      
      this.giftService.createGift(form.value).pipe(
        switchMap(() => {
          $('#addEditGiftModal').modal('hide')
          return this.giftService.getUserGift();
        })
      ).subscribe((res: GetSummary) => {
        this.giftSummary = res.response;
      });
    }
  }

}
