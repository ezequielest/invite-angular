import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  base = 'http://localhost:3000/api/gift'
  token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJVU0VSX1JPTEUiLCJfaWQiOiI1ZWIzMGU4YjIyYTkyZDQzZmNmZWFmNWEiLCJkZXNjcmlwdGlvbiI6IkV6ZXF1aWVsIHRlc3QiLCJwYXNzd29yZCI6Ii4uLiIsImVtYWlsIjoiZXplcXVpZWxAaW52aXRlLmNvbS5hciIsIl9fdiI6MH0sImlhdCI6MTU4OTM3ODMzNCwiZXhwIjoxNTg5NDY0NzM0fQ.HWHKdUHxHbXRS_CxW5apLLAZnQEWKRByB9i7fhLGhpc';

  constructor(private http: HttpClient) { }

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
