import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {


  userID: string;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService
  ) { }

  ionViewDidEnter() {

  }

  ngOnInit(){
    if(this.authService.isUserloggedin()){
      this.userID = this.authService.getCurrentUser().userID;
    }else{
      console.log("Thinks I am not logged in");
      this.navCtrl.navigateBack('');
    }
  }
  
  logout(){
   
  }
  
}