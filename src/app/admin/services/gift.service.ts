import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/login/services/login.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GiftService {

  base: string = environment.serverUrl + '/api/gift'
  token: string;

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.token = '?token=' + this.loginService.token;
   }

  //userId in token
  getSummary() {
    return this.http.get(`${this.base}/summary/${this.token}`)
  }

  getUserGift() {
    return this.http.get(`${this.base}/userId/${this.token}`)
  }


  createGift(payload) {
    return this.http.post(`${this.base}${this.token}`,payload);
  }

  editGift(id, payload) {
    return this.http.put(`${this.base}/${id}${this.token}`,payload);
  }

  deleteGift(id) {
    return this.http.delete(`${this.base}/${id}${this.token}`);
  }
}
