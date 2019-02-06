import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Keys from '../keys/Keys';

export interface Staff {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  public BaseUrl: String = 'http://localhost:4000/staff/';
  public BaseUrlEmail: String = 'http://localhost:4000/mail/';

  constructor(private http: HttpClient) {
  }

  //  getAllStaff(): Promise<void | Staff[]> {
  //     console.log("what a way to ...")
  //     return this.http.get(`http://localhost:8000/staff/test`)
  //                   .toPromise()
  //                   .then(response => response as Staff[])
  //                   .catch((err)=>{console.log("Error when fetching..")});
  //       }
  getAllStaff() {
    return this.http.get(`${this.BaseUrl}`);
  }

  getStaff(id: string) {
    return this.http.get(`${this.BaseUrl}` + id);
  }

  insertStaff(staffObj) {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({'x-auth-token': token});
    headers.set('Content-Type', 'application/json');
    return this.http.post(Keys.API.END_POINTS.ADMIN_STAFF, staffObj, {headers: headers});
  }

  updateStaff(staff: Staff) {
    return this.http.put(`${this.BaseUrl}` + staff.name + '/update', staff);
  }

  sendInvitation(studentBody) {
    console.log('into email send..');
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({'x-auth-token': token});
    const temp = studentBody;
    temp.status = 'SENT';
    return this.http.patch(`${this.BaseUrlEmail}`, temp, {
      headers: headers
    });
  }
}
