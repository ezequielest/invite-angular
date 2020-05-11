import { Component, OnInit } from '@angular/core';
import { GiftService } from '../../services/gift.service';
import { Gift, GetGift } from 'src/app/models/gift.model';

@Component({
  selector: 'app-summary-gift',
  templateUrl: './summary-gift.component.html',
  styleUrls: ['./summary-gift.component.scss']
})
export class SummaryGiftComponent implements OnInit {

  constructor(private giftService: GiftService) { }

  giftList: Array<Gift>;

  ngOnInit(): void {
    this.getUserGift();
  }

  getUserGift() {
    this.giftService.getUserGift().subscribe((res: GetGift)=> {

      this.giftList = res.response;
      console.log( this.giftList)
    });
  }

}
