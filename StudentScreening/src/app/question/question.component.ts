import {Component, OnInit} from '@angular/core';
import {QuestionServiceService} from '../services/question-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions;
  public status: Boolean = false;

  constructor(public questionService: QuestionServiceService, private router: Router) {
    this.getQuestions();
  }

  ngOnInit() {
  }


  getQuestions() {
    this.questionService.getServerQuestion().subscribe(data => {
      this.questions = data;
      console.log(data);
    });
  }

  changeStatus(question) {
    console.log(question);
    question.status = !question.status;
    this.questionService.updateActiveDeactiveStatus(question).subscribe(data => {
      this.getQuestions();
    });

  }

  addQuestion() {
    console.log('Add New Question');
    this.router.navigate(['addquestion']);
  }

}
