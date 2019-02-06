import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StaffService} from '../services/staff.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  addStaffForm: FormGroup;

  constructor(public staffService: StaffService) {
  }

  ngOnInit() {
    this.addStaffForm = new FormGroup({
      staffData: new FormGroup({
        title: new FormControl(null, [Validators.required]),
        firstName: new FormControl(null, [Validators.required]),
        lastName: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])
      })
    });
  }

  onSubmit() {

    const title = this.addStaffForm.value.staffData.title;
    const firstName = this.addStaffForm.value.staffData.firstName;
    const lastName = this.addStaffForm.value.staffData.lastName;
    const email = this.addStaffForm.value.staffData.email;
    const password = this.addStaffForm.value.staffData.password;
    const role = 'Staff';
    const status = true;

    const staffObj = {title, firstName, lastName, email, password, role, status};
    this.staffService.insertStaff(staffObj).subscribe(data => {
      console.log(data);
    });
  }
}
