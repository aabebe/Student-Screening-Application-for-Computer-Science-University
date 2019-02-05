import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Keys from '../keys/Keys';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminstaffService {

  constructor(public httpClient: HttpClient) {
  }

  getStaffList(): Observable<any> {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({'x-auth-token': token});
    return this.httpClient.get(Keys.API.END_POINTS.ADMIN_STAFF, {headers: headers});
  }
}
