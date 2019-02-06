import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {StaffService} from './services/staff.service';
import {AdminstaffService} from './services/adminstaff.service';
import {StaffStudentDetailComponent} from './components/staff-student-detail.component';
import {StudentsService} from './services/students.service';

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
import {AddQuestionComponent} from './add-question/add-question.component';

import {QuestionServiceService} from './services/question-service.service';
import {ExamComponent} from './exam/exam.component';
import {ExamScreenComponent} from './exam/exam-screen/exam-screen.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    StaffStudentDetailComponent,
    LoginScreenComponent,
    AdminComponent,
    AddQuestionComponent,
    AdminstaffComponent,
    UtilComponentComponent,
    QuestionComponent,
    ExamComponent,
    ExamScreenComponent
  ],

  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CountdownModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginScreenComponent},
      {
        path: 'staff',
        component: StaffStudentDetailComponent
      },
      {path: 'mail', component: ExamComponent},
      {path: 'examscreen', component: ExamScreenComponent},
      {
        path: 'admin', component: AdminComponent,
        children: [{
          path: '',
          outlet: 'question',
          component: QuestionComponent
        }, {
          path: '',
          outlet: 'adminstaff',
          component: AdminstaffComponent
        }, {
          path: '',
          outlet: 'addquestion',
          component: AddQuestionComponent
        }
        ]
      }
    ])
  ],
  providers: [
    QuestionServiceService,
    StaffService,
    AdminstaffService,
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
