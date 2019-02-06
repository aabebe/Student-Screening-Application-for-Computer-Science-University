import {Component, OnInit} from '@angular/core';
import {QuestionServiceService} from '../services/question-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.css']
})
export class QuestionTableComponent implements OnInit {
  questions;

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
    this.router.navigate(['/admin/question/addquestion']);
  }

}
