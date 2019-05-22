import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference, CollectionReference } from '@angular/fire/firestore';
import { reject } from 'q';
import { currentUser } from 'src/environments/environment';

export interface User {
  userID: string,
  password: string,
  userType: string
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  
  private collectionRef : CollectionReference;

  constructor(private afs: AngularFirestore) { 
    this.collectionRef = this.afs.firestore.collection('users');
  }

  getUser(id: string): Promise<User> {
    var docRef : DocumentReference = this.collectionRef.doc(id);
    var user : User = {
      userID : '',
      userType : '',
      password : ''
    };

    return docRef.get().then(doc => {
      if(doc.exists) {
        var data = doc.data();
        user.userID = id;
        user.password = data['password'];
        user.userType = data['userType'];
        return user;
      } else {
        return null;
      }
    });
  }

  checkPassword(pass: string, passToCheck: string) : boolean {
    return (pass == passToCheck);
  }

  isUserloggedin(): boolean {
    return (currentUser.userID != "");
  }

  getCurrentUser() : any {
    return currentUser;
  }

  loginUser(userToLogin: any) : Promise<boolean> {
    return this.getUser(userToLogin.userID).then(user => {
      if(user != null) {
        //TODO: hash the password
        var correctPass : boolean = this.checkPassword(user.password, userToLogin.password);
        if(correctPass) {
          currentUser.userID = user.userID;
          currentUser.userType = user.userType;
          return true;
        }
      }

      return false;
    }).catch((err : Error) => {
      console.log(err.message);
      return false;
    });
  }

  logOutUser(): void {
    currentUser.userType = "";
    currentUser.userID = "";
  }

}
