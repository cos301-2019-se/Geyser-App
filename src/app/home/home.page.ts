import { Component, OnInit } from '@angular/core';
import { User, AuthenticationService} from '../services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private userService: AuthenticationService) {

    //var d = this.userService.getUser("testID").then( u => {
   //   console.log('From HomePage: ', u);
    //}); //
    

  }

  ngOnInit() {
    
  }
}
