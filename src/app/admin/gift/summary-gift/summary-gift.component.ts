import { Component, OnInit } from '@angular/core';
import { GiftService } from '../../services/gift.service';
import { Gift, GetGiftPrivate, GiftPrivate, GiftSummary, GetSummary } from 'src/app/models/gift.model';

declare var $;

@Component({
  selector: 'app-summary-gift',
  templateUrl: './summary-gift.component.html',
  styleUrls: ['./summary-gift.component.scss']
})
export class SummaryGiftComponent implements OnInit {

  constructor(private giftService: GiftService) { }

  summary: Array<GiftSummary>;

  ngOnInit(): void {
    this.getUserGift();
  }

  getUserGift() {
    this.giftService.getSummary().subscribe((res: GetSummary)=> {

      this.summary = res.response;
      console.log(this.summary)

    });
  }

  togglePanel(panel) {
    $('#'+panel).collapse(); 
  }

}
