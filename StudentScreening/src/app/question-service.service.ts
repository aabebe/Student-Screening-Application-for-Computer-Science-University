import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Keys from './keys/Keys.js';


const headers = new HttpHeaders().set('X-auth-token', Keys.API.HEADER.X_AUTH_TOKEN);

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(public httpClient: HttpClient) {
  }

  getServerQuestion() {
    this.httpClient.get(Keys.API.END_POINTS.QUESTION, {headers: headers}).subscribe(data => {
      console.log(data);
    });
  }
}
