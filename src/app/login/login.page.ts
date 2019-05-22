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
 
  validations_form: FormGroup;
  errorMessage: string = '';
 
  constructor(
 
    private router: Router,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
 
  ) { }

  ngOnInit() {
 
    this.validations_form = this.formBuilder.group({
      userID: new FormControl('testID', Validators.compose([
        Validators.required
        //Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('pudding', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }
 
  validation_messages = {
    'userID': [
      { type: 'required', message: 'userID is required.' }
      //{ type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };
 
  loginUser(value: any){
    this.authService.loginUser(value).then(successful => {
      if(successful) {
        this.router.navigate(['dashboard']);
      } else {
        this.errorMessage = "UserID or password is incorrect.";
      }

    }, err => {
      this.errorMessage = "UserID or password is incorrect.";
    })
    
  }
}