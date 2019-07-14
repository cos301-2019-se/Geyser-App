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

  errorMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ionViewWillEnter() {
    //stops caching
  }

  ngOnInit() {
    //console.log(this.authService.currentUser.caseID);
    if (this.authService.currentUser.caseID === '' || this.authService.currentUser.caseID === null) {
      this.errorMessage = 'There are no pending cases.';
    } else {
      this.goNext();
    }
  }

  logout() {
    this.authService.logOutUser();
    this.router.navigate(['login']);
  }

  goNext() {
    this.router.navigate(['barcode-scanner']);
  }
}
