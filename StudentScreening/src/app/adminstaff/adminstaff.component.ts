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
    adminStaff.getStaffList().subscribe(data => {
      this.staffList = data;
    });
  }

  ngOnInit() {
  }

}
