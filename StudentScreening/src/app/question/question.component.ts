import {Component, OnInit} from '@angular/core';
import {QuestionServiceService} from '../services/question-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(public questionService: QuestionServiceService, private router: Router) {
  }

  ngOnInit() {
  }


}
