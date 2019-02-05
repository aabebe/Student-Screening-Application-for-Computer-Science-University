import {Component, OnInit} from '@angular/core';
import {QuestionServiceService} from '../services/question-service.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions;
  public status: Boolean = false;

  constructor(public questionService: QuestionServiceService) {
    console.log('Service Called');
    questionService.getServerQuestion().subscribe(data => {
      this.questions = data;
    });
  }

  ngOnInit() {
  }

  changeStatus(isChecked) {
    console.log('Coming here' + isChecked);
    isChecked = !isChecked;
  }

}
