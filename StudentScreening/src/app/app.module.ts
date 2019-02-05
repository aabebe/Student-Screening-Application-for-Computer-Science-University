import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginScreenComponent} from './login-screen/login-screen.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {AdminComponent} from './admin/admin.component';
import {UtilComponentComponent} from './util-component/util-component.component';
import {QuestionComponent} from './question/question.component';

import {QuestionServiceService} from './services/question-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    QuestionComponent,
    LoginScreenComponent,
    UtilComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginScreenComponent}, {
        path: 'admin', component: AdminComponent,
        children: [{
          path: '',
          outlet: 'question',
          component: QuestionComponent
        }]
      }
    ])
  ],
  providers: [QuestionServiceService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
