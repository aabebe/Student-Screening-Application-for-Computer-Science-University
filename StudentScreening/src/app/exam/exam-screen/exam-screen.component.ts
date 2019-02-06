import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QuestionServiceService } from './../../services/question-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ace from 'ace-builds'; 
import { CountdownComponent } from 'ngx-countdown';
import { StudentsService } from 'src/app/services/students.service';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';



@Component({
  selector: 'app-exam-screen',
  templateUrl: './exam-screen.component.html',
  styleUrls: ['./exam-screen.component.css'],
  providers: [DatePipe]

})
export class ExamScreenComponent implements OnInit {
  questions :any[] = [];
  questionIds: any[] = [];
  questionForm : FormGroup
  notify: string;
  config: any = { leftTime: 10, notify: [2, 5] };
  exam : any[] = [];
  userId: String;
  userFirstName: String;
  userLastName: String;
  userGender: String;
  userIsActive: String;

  answers: any;
  onStart() {
   this.notify = 'Strating Exam';
   
  }
  onFinished() {
    this.notify = 'Finished!';
  }
  onNotify(time: number) {
    this.notify = ``;
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
  constructor(private studentsService: StudentsService, private questionService:QuestionServiceService, private formbuilder:FormBuilder, private datePipe: DatePipe) {
      studentsService.getStudentExam("bruckgmk@gmail.com").subscribe((data)=>{
          console.log("in the student...")
          this.exam = data[0];
          this.userId = data[0]._id;
          this.userFirstName = data[0].firstName;
          this.userLastName = data[0].lastName;
          this.userGender = data[0].gender;
          this.userIsActive = data[0].isActive;
          console.log(data[0]._id)
          console.log("The end")
          
      });
      questionService.getServerQuestion().subscribe((data)=>{
      //studentsService.
      for(var i = 0; i < 3; i++) {
          let idx = Math.floor(Math.random() * data.length);
          this.questions.push(data[idx]);
          data.splice(idx, 1);
      }
         // console.log(this.questions[1].question)
      })
      
      this.questionForm = formbuilder.group({
          'questionOneId':['', Validators.required],
          'questionTwoId':['', Validators.required],
          'questionThreeId':['',Validators.required],
          'questionOneDesc': ['', Validators.required],
          'questionTwoDesc': ['', Validators.required],
          'questionThreeDesc': ['', Validators.required],
          'questionOneAns':['', Validators.required],
          'questionTwoAns':['', Validators.required],
          'questionThreeAns':['',Validators.required],
          'timeLeft':['',Validators.required]
 
      });
      this.questionForm.valueChanges.subscribe(data=>{
        this.answers = data;

        
       // console.log(this.exam)
      })
   }
submitTrigger(){
  
  //let datePipe;
   let datePipe = this.datePipe.transform(new Date(), 'MMM d, y, h:mm:ss a');
   this.answers.timeLeft = datePipe;
  this.answers.questionOneDesc = this.questions[0].question;
  this.answers.questionOneId = this.questions[0]._id;
  this.answers.questionTwoDesc = this.questions[1].question;
  this.answers.questionTwoId = this.questions[1]._id
  this.answers.questionThreeDesc = this.questions[2].question;
  this.answers.questionThreeId = this.questions[2]._id

  const examObj = {
    id: this.userId,
    email: "bruckgmk@gmail.com",
    status: "FINISHED",
    firstName: this.userFirstName,
    lastName: this.userLastName,
    isActive: this.userIsActive,
    gender: this.userGender,
    exam:[

          {time:this.answers.timeLeft},
          
          {id: this.answers.questionOneId,question:this.answers.questionOneDesc,answer:this.answers.questionOneAns},

          {id: this.answers.questionTwoId,question:this.answers.questionTwoDesc,answer:this.answers.questionTwoAns},

          {id: this.answers.questionThreeId,question:this.answers.questionThreeDesc,answer:this.answers.questionThreeAns}
    ]
  }
  this.studentsService.postStudentExam(examObj).subscribe((data)=>{
      if(data['status']==200){
        console.log("yepi")
      }
  });
  console.log(examObj)
  //StudentsService
}
  onSubmit() {
    console.log(this.questionForm);
  }
  ngOnInit() {
  }

}
