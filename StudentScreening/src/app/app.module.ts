import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {RouterModule} from '@angular/router';
import {QuestionComponent} from './question/question.component';
import {QuestionServiceService} from './question-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      {
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
