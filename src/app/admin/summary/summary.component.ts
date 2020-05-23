import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/services/login.service';
import { SummaryService } from '../services/summary.service';
import { Summary, getSummary } from 'src/app/models/summary.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  summary: Summary;
  totalGifts: number = 0;
  totalGiftGiven: number = 0;
  porcentGift: number = 0;

  constructor(private summaryService: SummaryService) { }

  ngOnInit(): void {

    this.summaryService.getSummary().subscribe((res:getSummary) => {
      console.log(res)
      this.summary = res.response;

      this.totalGifts = this.summary.giftSummary.reduce((acc,giftSummary)=>{
        return acc + giftSummary.cant;
      },0)

      this.totalGiftGiven = this.summary.giftSummary.reduce((acc,giftSummary)=>{
        return (giftSummary.alreadyDone) ? acc + giftSummary.cant : acc;
      },0)

      this.porcentGift = this.totalGiftGiven * 100 / this.totalGifts;

    });

  }

}
