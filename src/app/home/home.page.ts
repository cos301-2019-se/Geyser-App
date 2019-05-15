import { Component, OnInit } from '@angular/core';
import { User, AuthenticationService} from '../services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private users: Observable<User[]>;

  constructor(private userService: AuthenticationService) {
    var u : User= {
      userID: 'pudding',
      password: '12345',
      userType: 'admin'
    }
    this.userService.addUser(u);
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
