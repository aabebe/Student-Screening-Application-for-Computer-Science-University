import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff.service';
import { Subscription } from 'rxjs';

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
              <th>Link</th>
              <th>Check Status</th>
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
              <td>
                <button
                  class="uk-button uk-button-primary"
                  [name]="stu._id"
                  (click)="checkStatus(stu._id)"
                >
                  Check Status
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
  constructor(private staffService: StaffService) {
    console.log('I\'m in the constructorCon');
    const testing = staffService.getAllStaff();
    console.log(testing);
  }
  sendInvitation(id) {
    console.log('test');
  }
  checkStatus() {}

  ngOnInit() {
    this.getStudentSubscriber = this.staffService
      .getAllStaff()
      .subscribe(data => {
        console.log('asffdfd: ', data[0]);
        //  if(data['status'] ==200){
        this.isLoaded = true;
        // tslint:disable-next-line:forin
        for (const i in data) {
          this.students.push(data[i]);
          console.log(data[i]);
        }
        // this.students = data['data'];
        // }
        // else{
        console.log(this.students);
        // }
      });
  }
}
