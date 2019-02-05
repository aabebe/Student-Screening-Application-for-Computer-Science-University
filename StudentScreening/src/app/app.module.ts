import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StaffService} from './service/staff.service';
import { StaffStudentDetailComponent } from './components/staff-student-detail.component';

import { FooterComponent } from './common/components/footer/footer.component';

import { RoutingModule } from './routing.module';
import { HomeModule } from './modules/home/home.module';
import { HeaderComponent } from './common/components/header/header.component';
import { StudentModule } from './modules/student/student.module';
import { StaffModule } from './modules/staff/staff.module';
import { BlurEventDirective } from './modules/student/directives/blur-event.directive';


@NgModule({
  declarations: [
    AppComponent,
    StaffStudentDetailComponent,
    FooterComponent,
    HeaderComponent,
    BlurEventDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    HomeModule,
    StudentModule,
    StaffModule
  ],
  providers: [StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
