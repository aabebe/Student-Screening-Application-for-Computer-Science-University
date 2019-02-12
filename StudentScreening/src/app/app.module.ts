import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {StaffService} from './services/staff.service';
import {AdminstaffService} from './services/adminstaff.service';
import {StaffStudentDetailComponent} from './components/staff-student-detail.component';
import {StudentsService} from './services/students.service';

import {AceEditorModule} from 'ng2-ace-editor';
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
import {CountdownModule} from 'ngx-countdown';

import {WebGuard} from './guards/web.guard';
import {QuestionTableComponent} from './question-table/question-table.component';
import {AddStaffComponent} from './add-staff/add-staff.component';
import {StaffTableComponent} from './staff-table/staff-table.component';
import {ReviewComponent} from './review/review.component';
import {MarkExamComponent} from './mark-exam/mark-exam.component';
import {ExamtableComponent} from './examtable/examtable.component';
import {ThankYouComponent} from './exam/exam-screen/thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffStudentDetailComponent,
    LoginScreenComponent,
    AdminComponent,
    AdminstaffComponent,
    AddStaffComponent,
    StaffTableComponent,
    UtilComponentComponent,
    QuestionComponent,
    AddQuestionComponent,
    QuestionTableComponent,
    ReviewComponent,
    ExamComponent,
    MarkExamComponent,
    ExamtableComponent,
    ExamScreenComponent,
    ThankYouComponent,
  ],

  imports: [
  BrowserModule,
    NgbModule,
    FormsModule,
    AceEditorModule,
    HttpClientModule,
    CountdownModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginScreenComponent},
      {path: 'util', component: UtilComponentComponent},
      {
        path: 'staff',
        component: StaffStudentDetailComponent
      },

      {
        path: 'mail/:token/:email',
        component: ExamComponent
      },
      {
        path: 'examscreen',
        component: ExamScreenComponent,
        canActivate: [WebGuard]
      },
      {
        path:'thankyou',
        component: ThankYouComponent,
      },

      {
        path: 'admin', component: AdminComponent,
        children: [{
          path: '',
          redirectTo: 'question',
          pathMatch: 'full'
        }, {
          path: 'question',
          component: QuestionComponent,
          children: [
            {
              path: '',
              redirectTo: 'table',
              pathMatch: 'full'
            },
            {
              path: 'table',
              component: QuestionTableComponent
            },
            {
              path: 'addquestion',
              component: AddQuestionComponent
            }
          ]
        }, {
          path: 'adminstaff',
          component: AdminstaffComponent, children: [
            {
              path: '',
              pathMatch: 'full',
              redirectTo: 'tablestaff'
            },
            {
              path: 'tablestaff',
              component: StaffTableComponent
            },
            {
              path: 'addstaff',
              component: AddStaffComponent
            }
          ]
        }, {
          path: 'review',
          component: ReviewComponent,
          children: [
            {
              path: '',
              redirectTo: 'examtable',
              pathMatch: 'full'
            },
            {
              path: 'examtable',
              component: ExamtableComponent
            },
            {
              path: 'reviewexam',
              component: MarkExamComponent
            }
          ]
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
