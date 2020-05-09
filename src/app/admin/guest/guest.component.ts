import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
    this.guestService.getGuest().subscribe((res)=> {
      console.log(res);
    });
  }

}
