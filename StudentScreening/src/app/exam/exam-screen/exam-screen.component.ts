import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QuestionServiceService } from './../../services/question-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ace from 'ace-builds'; 
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-exam-screen',
  templateUrl: './exam-screen.component.html',
  styleUrls: ['./exam-screen.component.css']
})
export class ExamScreenComponent implements OnInit {
  questions :any[] = [];
  questionForm : FormGroup
    notify: string;
  config: any = { leftTime: 10, notify: [2, 5] };
  onStart() {
   this.notify = 'Strating Exam';
  }
  onFinished() {
    this.notify = 'Finished!';
  }
  onNotify(time: number) {
    this.notify = `Time{time}ms时通知了一下`;
  }

  stopConfig: any = { stopTime: new Date().getTime() + 1000 * 30 };
  resetStop() {
    this.stopConfig = { stopTime: new Date().getTime() + 1000 * 30 };
  }

  onEvent(value: any) {
    console.log('event', value);
  }

  @ViewChild('countdown') counter: CountdownComponent;
  resetTimer() {
    this.counter.restart();
}
  // @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
  // private codeEditor: ace.Ace.Editor;
  constructor(private questionService:QuestionServiceService, private formbuilder:FormBuilder) {
      questionService.getServerQuestion().subscribe((data)=>{
        
      for(var i = 0; i < 3; i++) {
          let idx = Math.floor(Math.random() * data.length);
          this.questions.push(data[idx]);
          data.splice(idx, 1);
      }
         // console.log(this.questions[1].question)
      })
      
      this.questionForm = formbuilder.group({
        
      'questionOneDesc': ['', Validators.required],
          'questionTwoDesc': ['', Validators.required],
          'questionThreeDesc': ['', Validators.required],
 
      });
      this.questionForm.valueChanges.subscribe(data=>{
        console.log("testing...");
        (data: any) => console.log(data)
      })
   }

  onSubmit() {
    console.log(this.questionForm);
  }
  ngOnInit() {
  }

}
