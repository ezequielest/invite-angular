import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddEditGuest } from 'src/app/models/guest.model';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  base = 'http://localhost:3000/api'

  token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJVU0VSX1JPTEUiLCJfaWQiOiI1ZWIzMGU4YjIyYTkyZDQzZmNmZWFmNWEiLCJkZXNjcmlwdGlvbiI6IkV6ZXF1aWVsIHRlc3QiLCJwYXNzd29yZCI6Ii4uLiIsImVtYWlsIjoiZXplcXVpZWxAaW52aXRlLmNvbS5hciIsIl9fdiI6MH0sImlhdCI6MTU4OTIwMjQ3MywiZXhwIjoxNTg5Mjg4ODczfQ.LifD_CA9Or-2TJImxabqk6lJUdnFdPMg4gi0dhdFgA4';

  constructor(private http: HttpClient) { }

  getGuest() {
    return this.http.get(`${this.base}/guest${this.token}`);
  }

  createGuest(payload: AddEditGuest) {
    console.log('creating ', payload)
    return this.http.post(`${this.base}/guest${this.token}`, payload);
  }

  editGuest(id: string, payload: AddEditGuest) {
    return this.http.put(`${this.base}/guest/${id}${this.token}`, payload);
  }

  deleteGuest(id: string) {
    return this.http.delete(`${this.base}/guest/${id}${this.token}`);
  }
}
