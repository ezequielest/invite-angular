import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private loginService: LoginService) { 
    this.loginService.loadLocalStorage();
  }

  ngOnInit(): void {
  }

}
