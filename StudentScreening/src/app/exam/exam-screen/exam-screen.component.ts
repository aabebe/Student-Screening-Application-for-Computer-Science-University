import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-screen',
  templateUrl: './exam-screen.component.html',
  styleUrls: ['./exam-screen.component.css']
})
export class ExamScreenComponent implements OnInit {
  constructor(
    private router: Router,
    private studentsService: StudentsService
  ) {}

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
  onSubmit() {
    const token = localStorage.getItem('student');
    console.log('from student exam screen on submit page');
    console.log(token);
    let email;
    this.studentsService.getCurrentStudent(token).subscribe(params => {
      email = params.email;
      console.log('from on submit');
      console.log(email);
    });
  }
}
