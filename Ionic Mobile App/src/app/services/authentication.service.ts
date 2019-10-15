import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  apiUrl: string = 'https://workflow-io.herokuapp.com/';

  currentUser = {
    userID: '',
    caseID: '',
    identifier: ''
  };

  constructor( private http: HTTP) {
  }

  isUserloggedin(): boolean {
    return (this.currentUser.userID !== '');
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  loginUser(userToLogin: any): Promise<boolean> {
    const userDetails = {
      userName: userToLogin.userID,
      password: userToLogin.password
    };

    const options = {
      method: 'post',
      data: userDetails,
      responseType: 'json'
    };

    return this.http.post(this.apiUrl, options, {}).then(data => {
      console.log(data.data); // data received by server
      return false;
    })
    .catch(error => {
      console.log(error.error); // error message as string
      return false;
    });
  }

  logOutUser(): void {
    this.currentUser.caseID = '';
    this.currentUser.userID = '';
    this.currentUser.identifier = '';
  }

}
