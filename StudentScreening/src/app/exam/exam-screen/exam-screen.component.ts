import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {QuestionServiceService} from '../../services/question-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as ace from 'ace-builds';
import {CountdownComponent} from 'ngx-countdown';
import {StudentsService} from 'src/app/services/students.service';
import {Subscription} from 'rxjs';
import {DatePipe} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-exam-screen',
  templateUrl: './exam-screen.component.html',
  styleUrls: ['./exam-screen.component.css'],
  providers: [DatePipe]

})
export class ExamScreenComponent implements OnInit {
  questions: any[] = [];
  questionIds: any[] = [];
  questionForm: FormGroup;
  notify: string;
  config: any = {leftTime: 10, notify: [2, 5]};
  exam: any[] = [];
  userId: String;
  userFirstName: String;
  userLastName: String;
  userGender: String;
  userIsActive: String;
  qstOneId: String;
  qstTwoId: String;
  qstThreeId: String;
  @ViewChild('countdown') counter: CountdownComponent;


  answers: any;
  stopConfig: any = {stopTime: new Date().getTime() + 1000 * 30};


  onStart() {
    this.notify = 'Strating Exam';

  }

  onFinished() {
    this.notify = 'Finished!';
  }

  onNotify(time: number) {
    this.notify = ``;
  }

  resetStop() {
    this.stopConfig = {stopTime: new Date().getTime() + 1000 * 30};
  }

  onEvent(value: any) {
    console.log('event', value);

  }

  resetTimer() {
    this.counter.restart();
  }

  constructor(private router: Router,
              private studentsService: StudentsService,
              private questionService: QuestionServiceService,
              private formbuilder: FormBuilder,
              private datePipe: DatePipe) {

    studentsService.getStudentExam('bruckgmk@gmail.com').subscribe((data) => {
      console.log('in the student...');
      this.exam = data[0];
      this.userId = data[0]._id;
      this.userFirstName = data[0].firstName;
      this.userLastName = data[0].lastName;
      this.userGender = data[0].gender;
      this.userIsActive = data[0].isActive;
      this.qstOneId = data[0].exam[0].id;
      this.qstTwoId = data[0].exam[1].id;
      this.qstThreeId = data[0].exam[2].id;
      console.log('The end');

    });


    this.questionForm = formbuilder.group({
      'questionOneId': ['', Validators.required],
      'questionTwoId': ['', Validators.required],
      'questionThreeId': ['', Validators.required],
      'questionOneDesc': ['', Validators.required],
      'questionTwoDesc': ['', Validators.required],
      'questionThreeDesc': ['', Validators.required],
      'questionOneAns': ['', Validators.required],
      'questionTwoAns': ['', Validators.required],
      'questionThreeAns': ['', Validators.required],
      'timeLeft': ['', Validators.required]

    });
    this.questionForm.valueChanges.subscribe(data => {
      this.answers = data;

    });
  }

  async getEmail(token) {
    let email;
    email = await this.studentsService.getCurrentStudent(token).subscribe(params => {
      email = params.email;
    });
    console.log(email);
    return email;
  }

  submitTrigger() {

    const token = localStorage.getItem('student');
    console.log('from student exam screen on submit page');
    console.log(token);
    const email = this.getEmail(token);
    /*this.studentsService.getCurrentStudent(token).subscribe(params => {
      email = params.email;
      console.log('from on submit');
      console.log(email);
    });*/

    const datePipe = this.datePipe.transform(new Date(), 'MMM d, y, h:mm:ss a');
    this.answers.timeLeft = datePipe;

    const examObj = {
      _id: this.userId,
      email: email,
      status: 'FINISHED',
      firstName: this.userFirstName,
      lastName: this.userLastName,
      isActive: this.userIsActive,
      gender: this.userGender,
      exam: [

        //   {time:this.answers.timeLeft},

        {
          id: this.qstOneId,
          question: this.answers.questionOneDesc, answer: this.answers.questionOneAns
        },

        {
          id: this.qstTwoId,
          question: this.answers.questionTwoDesc, answer: this.answers.questionTwoAns
        },

        {
          id: this.qstThreeId,
          question: this.answers.questionThreeDesc, answer: this.answers.questionThreeAns
        }
      ]
    };

    this.studentsService.postStudentExam(examObj).subscribe((data) => {
      if (data['status'] == 200) {
        console.log('yepi');
      }
    });
    console.log(examObj);
  }

  onSubmit() {
    console.log(this.questionForm);
  }

  ngOnInit() {
    const token = localStorage.getItem('student');
    console.log('from on init');
    console.log(token);
    if (!token) {
      this.router.navigate(['util']);
    }
    setTimeout(() => {
      localStorage.removeItem('student');
    }, 7200000);
  }

}
