import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import { map } from 'rxjs/operators';
export interface Staff {
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class StaffService {
  public BaseUrl: string = 'http://localhost:4000/staff/';
  constructor(private http: HttpClient) {}
    
//  getAllStaff(): Promise<void | Staff[]> {
//     console.log("what a way to ...")
//     return this.http.get(`http://localhost:8000/staff/test`)
//                   .toPromise()
//                   .then(response => response as Staff[])
//                   .catch((err)=>{console.log("Error when fetching..")});
//       }
getAllStaff() {
  console.log("comming...")
  //console.log(this.http.get(this.BaseUrl+'/staff/test'));
return this.http.get(this.BaseUrl+'test');
}

getStaff(id: string) {
  return this.http.get('http://localhost:4000/staff' + id);
}

insertStaff(staff: Staff) {
    return this.http.post('http://localhost:4000/staff/create', staff);
}

updateStaff(staff: Staff){
    return this.http.put('http://localhost:4000/' + staff.name + '/update', staff);
}

}
