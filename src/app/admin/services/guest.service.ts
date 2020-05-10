import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddEditGuest } from 'src/app/models/guest.model';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  base = 'http://localhost:3000/api'

  token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJVU0VSX1JPTEUiLCJfaWQiOiI1ZWI2Y2IyYTAyMjlmZjBhN2NmZDY3MDgiLCJkZXNjcmlwdGlvbiI6IkV6ZSZEZWJvIiwicGFzc3dvcmQiOiIuLi4iLCJlbWFpbCI6ImV6ZXF1aWVsQGludml0ZS5jb20uYXIiLCJfX3YiOjB9LCJpYXQiOjE1ODkxMjExNjQsImV4cCI6MTU4OTIwNzU2NH0.8Cdeq6u25XCrLP_L2VKIuCrdo4dtbZiYBv14nPvKN0o';

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
