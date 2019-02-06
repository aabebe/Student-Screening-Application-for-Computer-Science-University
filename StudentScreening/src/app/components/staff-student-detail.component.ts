import {Component, OnInit} from '@angular/core';
import {StaffService} from '../services/staff.service';
import {Subscription} from 'rxjs';
import {StudentsService} from '../services/students.service';

@Component({
  selector: 'app-staff-student-detail',
  templateUrl: './staff-student-detail.component.html',
  styles: []
})
export class StaffStudentDetailComponent implements OnInit {
  getStudentSubscriber: Subscription;
  students: any[] = [];
  isLoaded = false;
  public studentList;

  constructor(
    private staffService: StaffService,
    private studentsService: StudentsService
  ) {
    const testing = staffService.getAllStaff();
    console.log('Service Called');
    studentsService.getStudentList().subscribe(data => {
      this.studentList = data;
    });
  }

  sendInvitation(id) {
    const student = this.students.filter(st => st._id === id);
    const studentInfo = {
      id: student[0]._id,
      firstName: student[0].firstName,
      lastName: student[0].lastName,
      email: student[0].email,
      status: student[0].status

    };
    console.log(studentInfo);
    this.staffService.sendInvitation(studentInfo).subscribe(data => {
      if (data['status'] === 200) {
        console.log('Email Sent sucessfully');
      } else {
        console.log('Error on email send');
      }
    });
  }

  checkStatus() {
  }

  ngOnInit() {
    this.getStudentSubscriber = this.studentsService
      .getStudentList()
      .subscribe(data => {
        //console.log('asffdfd: ', data[0]);
        this.isLoaded = true;
        for (const i in data) {
          this.students.push(data[i]);
          console.log(data[i]);
        }

        console.log(this.students);
      });
  }

  ngOnDestroy() {
    this.getStudentSubscriber.unsubscribe();
  }
}
