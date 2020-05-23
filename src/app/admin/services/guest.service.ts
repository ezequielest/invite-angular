import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddEditGuest } from 'src/app/models/guest.model';
import { LoginService } from 'src/app/login/services/login.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  base = `${environment.apiURL}/api`;
  token: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.token = '?token=' + this.auth.token;
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
