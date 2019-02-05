import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginScreenComponent} from './login-screen/login-screen.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UtilComponentComponent} from './util-component/util-component.component';
import {AdminComponent} from './admin/admin.component';
import {QuestionComponent} from './question/question.component';

import {QuestionServiceService} from './question-service.service';

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
