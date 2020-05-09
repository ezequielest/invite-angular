import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  base = 'localhost:3000'

  constructor(private http: HttpClient) { }

  getGuest() {
    return this.http.get(`${this.base}/guest?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJVU0VSX1JPTEUiLCJfaWQiOiI1ZWIzMGU4YjIyYTkyZDQzZmNmZWFmNWEiLCJkZXNjcmlwdGlvbiI6IkV6ZXF1aWVsIHRlc3QiLCJwYXNzd29yZCI6Ii4uLiIsImVtYWlsIjoiZXplcXVpZWxAaW52aXRlLmNvbS5hciIsIl9fdiI6MH0sImlhdCI6MTU4ODk4NTg5NCwiZXhwIjoxNTg5MDcyMjk0fQ.sqBp7tm5KttfIc1ATXFNQnIYWZ9Xg-nSUROThCuH-MA`)
  }
}
