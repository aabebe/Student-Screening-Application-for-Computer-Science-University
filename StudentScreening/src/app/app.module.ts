import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {StaffService} from './services/staff.service';
import {AdminstaffService} from './services/adminstaff.service';
import {StaffStudentDetailComponent} from './components/staff-student-detail.component';


import {AppComponent} from './app.component';
import {LoginScreenComponent} from './login-screen/login-screen.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {AdminComponent} from './admin/admin.component';
import {UtilComponentComponent} from './util-component/util-component.component';
import {QuestionComponent} from './question/question.component';
import {AdminstaffComponent} from './adminstaff/adminstaff.component';

import {QuestionServiceService} from './services/question-service.service';

@NgModule({
  declarations: [
    AppComponent,
    StaffStudentDetailComponent,
    LoginScreenComponent,
    AdminComponent,
    AdminstaffComponent,
    UtilComponentComponent,
    QuestionComponent
  ],

  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginScreenComponent},
      {
        path: 'staff', component: StaffStudentDetailComponent
      },
      {
        path: 'admin', component: AdminComponent,
        children: [{
          path: '',
          outlet: 'question',
          component: QuestionComponent
        },
          {
            path: '',
            outlet: 'adminstaff',
            component: AdminstaffComponent
          }
        ]
      }
    ])
  ],
  providers: [QuestionServiceService, StaffService, AdminstaffService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
