import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  StaffStudentDetailComponent } from 'src/app/components/staff-student-detail.component';

// import { StaffHomeComponent } from 'src/app/modules/staff/components/staff-home/staff-home.component';

const APP_ROUTES: Routes = [
    {
        path: 'staff',
        component: StaffStudentDetailComponent
        // component: StaffHomeComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule { }
