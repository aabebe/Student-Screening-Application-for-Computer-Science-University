import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Keys from '../keys/Keys.js';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(public httpClient: HttpClient) {
  }

  getServerQuestion(): Observable<any> {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({'x-auth-token': token});
    return this.httpClient.get(Keys.API.END_POINTS.QUESTION, {headers: headers});
  }

  updateActiveDeactiveStatus(question) {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = new HttpHeaders({'x-auth-token': token});
    headers.set('Content-Type', 'application/json');
    console.log(headers);
    return this.httpClient.put(Keys.API.END_POINTS.QUESTION_ACTIVE_DEACTIVE, question, {headers: headers});
  }
}
