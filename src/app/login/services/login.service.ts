import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base = `${environment.apiURL}/api/user`;
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
