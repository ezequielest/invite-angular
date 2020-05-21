import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(private loginService: LoginService) { 
    this.loginService.loadLocalStorage();
  }
}
