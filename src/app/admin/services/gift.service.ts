import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  base = 'http://localhost:3000/api/gift'
  token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJVU0VSX1JPTEUiLCJfaWQiOiI1ZWI2Y2IyYTAyMjlmZjBhN2NmZDY3MDgiLCJkZXNjcmlwdGlvbiI6IkV6ZSZEZWJvIiwicGFzc3dvcmQiOiIuLi4iLCJlbWFpbCI6ImV6ZXF1aWVsQGludml0ZS5jb20uYXIiLCJfX3YiOjB9LCJpYXQiOjE1ODkyNDE3MTIsImV4cCI6MTU4OTMyODExMn0.sKqvLAc3nWQPAGCKN6CuQcMTfwxte54HnoPC4FQ6TXg';

  constructor(private http: HttpClient) { }

  //userId in token
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
