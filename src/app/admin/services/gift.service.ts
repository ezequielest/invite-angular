import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  base = 'http://localhost:3000/api/gift'
  token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJVU0VSX1JPTEUiLCJfaWQiOiI1ZWIzMGU4YjIyYTkyZDQzZmNmZWFmNWEiLCJkZXNjcmlwdGlvbiI6IkV6ZXF1aWVsIHRlc3QiLCJwYXNzd29yZCI6Ii4uLiIsImVtYWlsIjoiZXplcXVpZWxAaW52aXRlLmNvbS5hciIsIl9fdiI6MH0sImlhdCI6MTU4OTIwMjQ3MywiZXhwIjoxNTg5Mjg4ODczfQ.LifD_CA9Or-2TJImxabqk6lJUdnFdPMg4gi0dhdFgA4';

  constructor(private http: HttpClient) { }

  //userId in token
  getUserGift() {
    return this.http.get(`${this.base}/userId/${this.token}`)
  }
}
