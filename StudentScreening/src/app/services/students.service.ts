import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Keys from '../keys/Keys';
import { Observable } from 'rxjs';

export interface Student {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  public BaseUrl: String = 'http://localhost:4000/students/';

  constructor(private http: HttpClient) {}

  getStudentList(): Observable<any> {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({ 'x-auth-token': token });
    console.log('the tokent is' + token);
    return this.http.get(Keys.API.END_POINTS.ADMISSION_STAFF, {
      headers: headers
    });
  }

  getAllStudents() {
    console.log('comming...');
    return this.http.get(`${this.BaseUrl}`);
  }

  getStudent(id: string) {
    return this.http.get(`${this.BaseUrl}` + id);
  }

  insertStudent(student: Student) {
    return this.http.post(`${this.BaseUrl}`, student);
  }

  updateStaff(student: Student) {
    return this.http.put(`${this.BaseUrl}` + student.name + '/update', student);
  }
  updateStudentActivity(email): Observable<any> {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({ 'x-auth-token': token });
    const data = {
      email: email
    };
    return this.http.patch(`${this.BaseUrl}`, data, { headers: headers });
  }
  getCurrentStudent(input): Observable<any> {
    const token = JSON.parse(localStorage.getItem('student'));
    // const headers = new HttpHeaders({ 'x-auth-token': token });
    return this.http.post(`${this.BaseUrl}`, input);
  }
}
