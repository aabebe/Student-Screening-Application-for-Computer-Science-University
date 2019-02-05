import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StaffService} from './service/staff.service';
import { StaffStudentDetailComponent } from './components/staff-student-detail.component';
import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [
    AppComponent,
    StaffStudentDetailComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,

  ],
  providers: [StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
