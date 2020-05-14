import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddEditGuest } from 'src/app/models/guest.model';
import { LoginService } from 'src/app/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  base = 'http://localhost:3000/api'
  token: string;

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.token = '?token=' + this.loginService.token;
  }

  getGuest() {
    return this.http.get(`${this.base}/guest/userId` + this.token);
  }

  createGuest(payload: AddEditGuest) {
    return this.http.post(`${this.base}/guest` + this.token, payload);
  }

  editGuest(id: string, payload: AddEditGuest) {
    return this.http.put(`${this.base}/guest/${id}` + this.token, payload);
  }

  deleteGuest(id: string) {
    return this.http.delete(`${this.base}/guest/${id}` + this.token);
  }
}
