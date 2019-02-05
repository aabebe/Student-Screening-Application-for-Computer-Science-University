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
    this.httpService.VerifyLogin(email, password).subscribe(
      resp => {
        if (resp.status === 404) {
          alert(resp.error);
        }
        const token = resp.message;
        const role = resp.staff.role;
        localStorage.setItem('token', JSON.stringify(token));

        console.log(resp);
        console.log(role);
        console.log(token);
        if (role === 'Admin') {
          console.log('somethingis working');
          this.router.navigate(['/admin']);
        } else if (role === 'Staff') {
          this.router.navigate(['staff']);
        }
      },
      err => {
        console.log(err);
      }
    );
    console.log(email);
    console.log(password);
    console.log(this.signinForm);
  }
}
