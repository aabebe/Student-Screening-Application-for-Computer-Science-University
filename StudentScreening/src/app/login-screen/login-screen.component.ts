import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { HttpServicesService } from '../services/http-services.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpServicesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signinForm = new FormGroup({
      userData: new FormGroup({
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, [Validators.required])
      })
    });
  }
  onSubmit() {
    const email = this.signinForm.value.userData.email;
    const password = this.signinForm.value.userData.password;
    this.httpService.VerifyLogin(email, password).subscribe(resp => {
      console.log(resp);
    });
    console.log(email);
    console.log(password);
    console.log(this.signinForm);
  }
}
