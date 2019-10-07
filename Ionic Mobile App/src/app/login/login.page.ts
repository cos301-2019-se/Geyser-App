import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  validationsForm: FormGroup;
  errorMessage = '';

  validationMessages = {
    userID: [
      { type: 'required', message: 'userID is required.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
    ]
  };

  constructor(

    private router: Router,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      userID: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  loginUser(value: any){
    this.authService.loginUser(value).then(successful => {
      if(successful) {
        this.router.navigate(['dashboard']);
      } else {
        this.errorMessage = 'UserID or password is incorrect.';
      }

    }, err => {
      this.errorMessage = 'UserID or password is incorrect.';
    });
  }
}
