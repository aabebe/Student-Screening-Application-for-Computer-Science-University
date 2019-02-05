import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
export interface Staff {
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class StaffService {
  public BaseUrl: String = 'http://localhost:4000/staff/';
  constructor(private http: HttpClient) {}

  //  getAllStaff(): Promise<void | Staff[]> {
  //     console.log("what a way to ...")
  //     return this.http.get(`http://localhost:8000/staff/test`)
  //                   .toPromise()
  //                   .then(response => response as Staff[])
  //                   .catch((err)=>{console.log("Error when fetching..")});
  //       }
  getAllStaff() {
    console.log('comming...');
    // console.log(this.http.get(this.BaseUrl+'/staff/test'));
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({ 'x-auth-token': token });
    return this.http.get(this.BaseUrl + 'test', { headers: headers });
  }

  getStaff(id: string) {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({ 'x-auth-token': token });
    return this.http.get(`http://localhost:4000/staff ${id}`, {
      headers: headers
    });
  }

  insertStaff(staff: Staff) {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({ 'x-auth-token': token });
    return this.http.post('http://localhost:4000/staff/create', staff, {
      headers: headers
    });
  }

  updateStaff(staff: Staff) {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({ 'x-auth-token': token });
    return this.http.put(
      'http://localhost:4000/' + staff.name + '/update',
      staff,
      { headers: headers }
    );
  }
}
