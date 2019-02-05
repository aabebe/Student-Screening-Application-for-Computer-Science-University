import { HttpServicesService } from './services/http-services.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UtilComponentComponent } from './util-component/util-component.component';


const appRoutes: Routes = [
  { path: '', component: LoginScreenComponent }

];

@NgModule({
  declarations: [AppComponent, LoginScreenComponent, UtilComponentComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
