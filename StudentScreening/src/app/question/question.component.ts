import {Component, OnInit} from '@angular/core';
import {QuestionServiceService} from '../question-service.service';

const COUNTRIES = [
  {
    question: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
    population: 146989754
  },
  {
    question: 'Canada',
    population: 36624199
  },
  {
    question: 'United States',
    population: 324459463
  },
  {
    question: 'China',
    population: 1409517397
  }
];

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  countries = COUNTRIES;
  constructor(public questionService: QuestionServiceService) {
    console.log('Service Called');
    questionService.getServerQuestion();
  }

  ngOnInit() {
  }

}
