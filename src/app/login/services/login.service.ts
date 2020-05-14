import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base = 'http://localhost:3000/api/user';
  token: string;

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
   }

  login (payload) {
    return this.http.post(`${this.base}/login`, payload);
  }

  loadLocalStorage(){
    this.token = localStorage.getItem('token');
  }
}
