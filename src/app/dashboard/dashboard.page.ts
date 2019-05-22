import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {

  private userID: string;
  private userType: string;
  plumber: boolean = false;
  //homeOwner: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ionViewWillEnter() {
    // stops caching
  }

  ngOnInit(){
    if(this.authService.isUserloggedin()){
      this.userID = this.authService.getCurrentUser().userID;
      this.userType = this.authService.getCurrentUser().userType;
    }else{
      console.log("Not officially logged in, you should not be in this screen.");
      this.router.navigate(['login']);
    }

    this.setUserType();
  }

  setUserType(): void {
    this.plumber = this.userType == "plumber";
    //this.homeOwner = this.userType == "homeOwner";
  }

  useless(){}
  
  logout(){
    this.authService.logOutUser();
    this.router.navigate(['login']);
  }  
}