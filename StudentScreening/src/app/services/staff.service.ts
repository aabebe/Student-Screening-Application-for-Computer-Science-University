import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Staff {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  public BaseUrl: String = 'http://localhost:4000/staff/';
  public BaseUrlEmail: String = 'http://localhost:4000/mail/';
  token = JSON.parse(localStorage.getItem('token'));
  headers = new HttpHeaders({ 'x-auth-token': this.token });
  constructor(private http: HttpClient) {}

  //  getAllStaff(): Promise<void | Staff[]> {
  //     console.log("what a way to ...")
  //     return this.http.get(`http://localhost:8000/staff/test`)
  //                   .toPromise()
  //                   .then(response => response as Staff[])
  //                   .catch((err)=>{console.log("Error when fetching..")});
  //       }
  getAllStaff() {
    return this.http.get(`${this.BaseUrl}`, { headers: this.headers });
  }

  getStaff(id: string) {
    return this.http.get(`${this.BaseUrl}` + id, { headers: this.headers });
  }

  insertStaff(staff: Staff) {
    return this.http.post(`${this.BaseUrl}`, staff, { headers: this.headers });
  }

  updateStaff(staff: Staff) {
    return this.http.put(`${this.BaseUrl}` + staff.name + '/update', staff, {
      headers: this.headers
    });
  }

  sendInvitation(studentBody) {
    console.log('into email send..');
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({ 'x-auth-token': token });
    const temp = studentBody;
    temp.status = 'SENT';
    return this.http.patch(`${this.BaseUrlEmail}`, temp, {
      headers: headers
    });
  }
}
