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

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ionViewWillEnter() {
    //stops caching
  }

  ngOnInit() {
    this.goNext();
  }

  logout() {
    this.authService.logOutUser();
    this.router.navigate(['login']);
  }

  goNext() {
    this.router.navigate(['barcode-scanner']);
  }
}
