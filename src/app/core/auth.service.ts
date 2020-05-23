import { Injectable } from '@angular/core';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();
  token: string;

  constructor() {}

  public isAuthenticated(): boolean {
    this.token = localStorage.getItem('token');

    if (this.token) {
      return !this.helper.isTokenExpired(this.token);
    } else {
      return false;
    }
  }

  public getToken(){
    return this.token;
  }
}
