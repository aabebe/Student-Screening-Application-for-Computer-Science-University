import {Component, OnInit} from '@angular/core';
import {StudentsService} from '../services/students.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-examtable',
  templateUrl: './examtable.component.html',
  styleUrls: ['./examtable.component.css']
})
export class ExamtableComponent implements OnInit {

  public studentList: [];

  constructor(public studentService: StudentsService, public router: Router) {
    this.getServerStudents();
  }

  getServerStudents() {
    this.studentService.getFinishedStudentList().subscribe(data => {
      this.studentList = data;
    });
  }

  ngOnInit() {
  }

  markExam(student) {
    this.router.navigate(['/admin/review/reviewexam', {'student': JSON.stringify(student)}]);
  }
}
