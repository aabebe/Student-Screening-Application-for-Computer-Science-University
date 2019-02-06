import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionServiceService} from '../services/question-service.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  addQuestionForm: FormGroup;

  constructor(public questionService: QuestionServiceService) {
  }

  ngOnInit() {
    this.addQuestionForm = new FormGroup({
      questionData: new FormGroup({
        question: new FormControl(null, [Validators.required])
      })
    });
  }

  onSubmit() {
    const question = this.addQuestionForm.value.questionData.question;
    const status = true;
    const questionObj = {question, status};
    this.questionService.saveQuestion(questionObj).subscribe(data => {
      console.log(data);
    });

  }
}
