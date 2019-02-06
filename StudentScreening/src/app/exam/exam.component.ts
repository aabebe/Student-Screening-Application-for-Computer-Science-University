import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { HttpServicesService } from '../services/http-services.service';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  constructor(
    private router: Router,
    private activeScreen: ActivatedRoute,
    private studentService: StudentsService
  ) {}
  token: string;
  email;
  ngOnInit() {}

  onStart() {
    this.activeScreen.params.subscribe(params => {
      this.token = params.token;
      this.email = params.email;
      console.log('lets see from on start');
      console.log(this.email);
      localStorage.setItem('student', this.token);
      console.log(this.token);
    });
    this.studentService.updateStudentActivity(this.email).subscribe(
      res => {
      console.log('lsdfdsklfhdsfhd');
      console.log(res.data.isActive);
      const data = res.data.isActive;

      if (data) {
        this.router.navigate(['util']);
      }
    });

    this.router.navigate(['examscreen']);
  }
}
