import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

// @Injectable({ providedIn: 'root' })
export class DashboardPage implements OnInit {

  private userID: string;
  private userType: string;
  plumber = false;
  homeOwner = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ionViewWillEnter() {
    // stops caching
    console.log(this.authService.isUserloggedin());
    if (this.authService.isUserloggedin()) {
      this.userID = this.authService.getCurrentUser().userID;
      this.userType = this.authService.getCurrentUser().userType;
    } else {
      console.log('Not officially logged in, you should not be in this screen.');
      this.router.navigate(['login']);
    }

    this.setUserType();
  }

  ngOnInit() {
  }

  setUserType(): void {
    this.plumber = this.userType === 'plumber';
    this.homeOwner = this.userType === 'homeOwner';
  }

  useless() {}

  logout() {
    this.authService.logOutUser();
    this.router.navigate(['login']);
  }

  goNext() {
    this.router.navigate(['barcode-scanner']);
  }
}
