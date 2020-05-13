import { Component, OnInit } from '@angular/core';
import { GiftService } from '../../services/gift.service';
import { Gift, GetGift } from 'src/app/models/gift.model';
import { switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

declare var $;

@Component({
  selector: 'app-manage-gift',
  templateUrl: './manage-gift.component.html',
  styleUrls: ['./manage-gift.component.scss']
})
export class ManageGiftComponent implements OnInit {

  constructor(private giftService: GiftService) { }

  giftList: Array<Gift>;
  giftEdit: Gift = null;
  giftDelete: Gift;
  messageConfirm: string;


  ngOnInit(): void {
    this.getUserGift();
  }

  getUserGift() {
    this.giftService.getUserGift().subscribe((res: GetGift)=> {
      this.giftList = res.response;
    });
  }

  add() {
    this.giftEdit =  null;
  }

  edit(i) {
    this.giftEdit =  this.giftList[i];
  }

  delete(i) {
    this.giftDelete =  this.giftList[i];
    this.messageConfirm = "Esta seguro de que quiere eliminar el regalo: " + this.giftDelete.description + " ?";
  }

  confirmationModal(res) {
    if (res) {
      this.giftService.deleteGift(this.giftDelete._id).pipe(
        switchMap(()=>{
          $('#confirmModal').modal('hide')
          return this.giftService.getUserGift();
        })
      ).subscribe((res: GetGift) => {
        this.giftList = res.response;
      });

    }
  }

  submitGift(form: FormControl){
    if (this.giftEdit) {
      this.giftService.editGift(this.giftEdit._id, form.value).pipe(
        switchMap(() => {
          $('#addEditGiftModal').modal('hide')
          return this.giftService.getUserGift();
        })
      ).subscribe((res: GetGift) => {
        this.giftList = res.response;
      });
    } else {
      
      this.giftService.createGift(form.value).pipe(
        switchMap(() => {
          $('#addEditGiftModal').modal('hide')
          return this.giftService.getUserGift();
        })
      ).subscribe((res: GetGift) => {
        this.giftList = res.response;
      });
    }
  }

}
