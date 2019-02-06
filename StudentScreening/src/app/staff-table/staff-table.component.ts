import {Component, OnInit} from '@angular/core';
import {AdminstaffService} from '../services/adminstaff.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-staff-table',
  templateUrl: './staff-table.component.html',
  styleUrls: ['./staff-table.component.css']
})
export class StaffTableComponent implements OnInit {

  public staffList;

  constructor(public adminStaff: AdminstaffService, public router: Router) {
    console.log('Service Called');
    this.getAllStaff();
  }

  ngOnInit() {
  }

  getAllStaff() {
    this.adminStaff.getStaffList().subscribe(data => {
      this.staffList = data;
    });
  }

  changeStatus(staff) {
    staff.status = !staff.status;
    this.adminStaff.updateActiveDeactiveStatus(staff).subscribe(data => {
      this.getAllStaff();
    });
  }

  addQuestion() {
    this.router.navigate(['/admin/adminstaff/addstaff']);
  }

}
