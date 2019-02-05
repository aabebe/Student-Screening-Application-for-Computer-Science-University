import {Component, OnInit} from '@angular/core';
import {AdminstaffService} from '../services/adminstaff.service';


@Component({
  selector: 'app-adminstaff',
  templateUrl: './adminstaff.component.html',
  styleUrls: ['./adminstaff.component.css']
})
export class AdminstaffComponent implements OnInit {
  public staffList;

  constructor(public adminStaff: AdminstaffService) {
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

}
