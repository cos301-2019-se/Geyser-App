import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface user { 
  result: string;
  identifier: string;
  caseToBeWorkedOn: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  apiUrl: string = 'https://workflow-io.herokuapp.com/';
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  currentUser = {
    userID: '',
    caseID: '',
    identifier: '',
  };


  constructor(private http: HttpClient) {
  }

  isUserloggedin(): boolean {
    return (this.currentUser.userID !== '');
  }

  sendImages(imagesToSend: any): Promise<Boolean> {
    return this.http.post<string>(this.apiUrl, imagesToSend, this.httpOptions).toPromise().then(data => {
      var res = JSON.parse(data);
      alert(data);
      if(res.errror == 'Invalid user') {
        console.log('Invalid user');
        return false;
      }
      return true;
    }, err => {
      console.log('API failed.');
      alert(err);
      return false;
    });
  }

  addgeyser(geyserToAdd: any): Promise<Boolean> {
    return this.http.post<string>(this.apiUrl, geyserToAdd, this.httpOptions).toPromise().then(data => {
      var res = JSON.parse(data);
      if(res.errror == 'Invalid user') {
        console.log('Invalid user');
        return false;
      }
      return true;
    }, err => {
      console.log('API failed.');
      return false;
    });
  }

  updateCase(caseToUpdate: any): Promise<Boolean> {
    return this.http.post<string>(this.apiUrl, caseToUpdate, this.httpOptions).toPromise().then(data => {
      var res = JSON.parse(data);
      if(res.errror == 'Invalid user') {
        console.log('Invalid user');
        return false;
      }
      return true;
    }, err => {
      console.log('API failed.');
      return false;
    });
  }

  updateUser(userToUpdate: any): Promise<Boolean> {
    return this.http.post<string>(this.apiUrl, userToUpdate, this.httpOptions).toPromise().then(data => {
      var res = JSON.parse(data);
      if(res.errror == 'Invalid user') {
        console.log('Invalid user');
        return false;
      }
      return true;
    }, err => {
      console.log('API failed.');
      return false;
    });
  }


  loginUser(userToLogin: any): Promise<Boolean> {
    this.logOutUser();
    const userDetails = {
      type: 'appLogin',
      userName: userToLogin.userID,
      password: userToLogin.password
    };

    return this.http.post<string>(this.apiUrl, userDetails, this.httpOptions).toPromise().then(data => {
      var res: user = JSON.parse(data);
      if(res.result != 'Incorrect password') {
        this.currentUser.caseID = res.caseToBeWorkedOn;
        this.currentUser.identifier = res.identifier;
        this.currentUser.userID = userDetails.userName
        return true;
      } else {
        console.log('Incorrect password');
        return false;
      }
    }, err => {
      console.log('API failed.');
      return false;
    });
  }

  logOutUser(): void {
    this.currentUser.caseID = '';
    this.currentUser.userID = '';
    this.currentUser.identifier = '';
  }

}
