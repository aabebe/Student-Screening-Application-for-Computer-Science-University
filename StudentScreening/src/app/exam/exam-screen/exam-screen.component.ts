import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-screen',
  templateUrl: './exam-screen.component.html',
  styleUrls: ['./exam-screen.component.css']
})
export class ExamScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('student');
    console.log('from on init');
    console.log(token);
    if (!token) {
      this.router.navigate(['util']);
    }
    setTimeout(() => {
      localStorage.removeItem('student');
    }, 2000 * 60);

  }

}
