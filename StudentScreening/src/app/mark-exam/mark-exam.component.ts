import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-mark-exam',
  templateUrl: './mark-exam.component.html',
  styleUrls: ['./mark-exam.component.css']
})
export class MarkExamComponent implements OnInit {
  public exam: [];

  questionOneDesc: String;
  questionTwoDesc: String;
  questionThreeDesc: String;
  questionOneAns: String;
  questionTwoAns: String;
  questionThreeAns: String;
  students: any;
  myForm : FormGroup;
  userId: String;
  userFirstName: String;
  userLastName: String;
  userGender: String;
  userIsActive: String;
  qstOneId: String;
  qstTwoId: String;
  qstThreeId: String;
  userEmail: String;
  studentData: any;
  constructor(private route: ActivatedRoute, private fb:FormBuilder, private studentsService:StudentsService, private router:Router) {

     
    route.params.subscribe(obj => {
      const student = obj['student'];
      console.log(JSON.parse(student));
      this.students = JSON.parse(student);
      console.log(this.students.exam[2].question);
      this.questionOneAns = this.students.exam[0].answer[0];
      this.questionTwoAns = this.students.exam[1].answer[0];
      this.questionThreeAns = this.students.exam[2].answer[0];
      this.questionOneDesc = this.students.exam[0].question;
      this.questionTwoDesc = this.students.exam[1].question;
      this.questionThreeDesc = this.students.exam[2].question;
      this.qstOneId = this.students.exam[0].id;
      this.qstTwoId = this.students.exam[1].id;
      this.qstThreeId = this.students.exam[2].id;

      this.userId = this.students._id;
      this.userFirstName =  this.students.firstName;
      this.userLastName =  this.students.lastName;
      this.userGender =  this.students.gender;
      this.userIsActive =  this.students.isActive;
      this.userEmail = this.students.email;

     
      this.myForm = fb.group({
        'updateStatus' : ['',Validators.required]

      });

            this.myForm.valueChanges.subscribe(data=>{
              this.studentData = data;
              console.log(this.studentData)

      })

    });
  }
submitTrigger(){
  

 const examObj1 = {
        id:this.userId,
        status: this.studentData.updateStatus
  }

  this.studentsService.updateStatus(examObj1).subscribe((data)=>{
      console.log(data);
  });
  console.log("Checking....")
  console.log(examObj1)
     this.router.navigate(['/admin/review']);

}
  ngOnInit() {
    this.questionOneAns = this.students.exam[0].answer[0];

  }

}
