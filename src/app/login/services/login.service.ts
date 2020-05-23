import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base = `${environment.apiURL}/api/user`;

  constructor(private http: HttpClient) {}

  login (payload) {
    return this.http.post(`${this.base}/login`, payload);
  }
}
