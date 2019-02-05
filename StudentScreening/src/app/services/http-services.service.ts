import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {
  constructor(private http: HttpClient) {}

  VerifyLogin(email, password): Observable<any> {
    const user = { email: email, password: password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/auth', user, {
      headers: headers
    });
  }
}
