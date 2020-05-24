import { Component, OnInit, HostListener } from '@angular/core';

declare var $;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  blackHeader = false;

  constructor() { }

  ngOnInit(): void {

  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    console.log("Scroll Event", window.pageYOffset );
    this.blackHeader = window.pageYOffset > 50 ? true : false;
  }
  


}
