import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Keys from '../keys/Keys';
import {Observable} from 'rxjs';

export interface Student {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  public BaseUrl: String = 'http://localhost:4000/students/';

  constructor(private http: HttpClient) {
  }

  getStudentList(): Observable<any> {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({'x-auth-token': token});
    return this.http.get(Keys.API.END_POINTS.ADMISSION_STAFF, {headers: headers});
  }

  getFinishedStudentList(): Observable<any> {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({'x-auth-token': token});
    return this.http.get(Keys.API.END_POINTS.EXAM_FINISHED, {headers: headers});
  }

  getAllStudents() {
    return this.http.get(`${this.BaseUrl}`);
  }

  getStudent(id: string) {
    return this.http.get(`${this.BaseUrl}` + id);
  }

  getStudentExam(email: string) {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({'x-auth-token': token});
    return this.http.get(Keys.API.END_POINTS.GET_EXAM + email, {headers: headers});

  }

  postStudentExam(data) {
    console.log('incomming student.....');
    console.log(data);
    console.log('----------------');
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({'x-auth-token': token});
    return this.http.post(Keys.API.END_POINTS.WRITE_EXAM, data, {headers: headers});

  }

  updateStudent(data) {
    //console.log('comming');
    //console.log(data);
    const email = 'bruckgmk@gmail.com';
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({'x-auth-token': token});
    return this.http.put(Keys.API.END_POINTS.EXAM_SAVE, {headers: headers});
  }
updateStatus(data){
    console.log('commingCOSS');
    console.log(data);
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({'x-auth-token': token});
    return this.http.put(Keys.API.END_POINTS.UPDATE_STATUS,data, {headers: headers});
}
  insertStudent(student: Student) {
    return this.http.post(`${this.BaseUrl}`, student);
  }

  updateStaff(student: Student) {
    return this.http.put(`${this.BaseUrl}` + student.name + '/update', student);
  }

}
