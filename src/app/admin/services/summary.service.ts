import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/login/services/login.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  base = `${environment.apiURL}/api/user`;
  token: string;

  constructor(private loginService: LoginService, private http: HttpClient, private auth: AuthService) {
    this.token = '?token=' + this.auth.token;
   }

  getSummary() {
    return this.http.get(`${this.base}/summary/${this.token}`)
  }


}
