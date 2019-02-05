import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff.service';
import { Subscription } from 'rxjs';
import { StudentsService } from '../services/students.service';
@Component({
  selector: 'app-staff-student-detail',
  template: `
    <div class="container">
      <div class="row">
        <table class="table" *ngIf="isLoaded">
          <caption style="text-align:center">
            Students List
          </caption>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td></td>
            </tr>
          </tfoot>
          <tbody>
            <tr *ngFor="let stu of students">
              <td>{{ stu.firstName }}</td>
              <td>{{ stu.lastName }}</td>
              <td>
                <button
                  class="uk-button uk-button-primary"
                  [id]="stu._id"
                  (click)="sendInvitation(stu._id)"
                >
                  Send Invitation
                </button>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: []
})
export class StaffStudentDetailComponent implements OnInit {
  getStudentSubscriber: Subscription;
  students: any[] = [];
  isLoaded = false;
  public studentList;
  constructor(private staffService: StaffService, private studentsService: StudentsService) {
    console.log('I\'m in the constructorCon');
    const testing = staffService.getAllStaff();
    console.log('Service Called');
        studentsService.getStudentList().subscribe(data => {
        this.studentList = data;
    });
    console.log(this.studentList);
  }


  sendInvitation(id) {
    console.log('test');
  }
  checkStatus() {

  }

  ngOnInit() {
    this.getStudentSubscriber = this.studentsService
      .getStudentList()
      .subscribe(data => {
        console.log('asffdfd: ', data[0]);
        this.isLoaded = true;
        for (const i in data) {
          this.students.push(data[i]);
          console.log(data[i]);
        }

        console.log(this.students);

      });
  }
}
