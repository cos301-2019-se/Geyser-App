import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference, CollectionReference } from '@angular/fire/firestore';
import * as crypto from 'crypto';

export interface User {
  userID: string;
  password: string;
  caseID: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private collectionRef: CollectionReference;
  currentUser = {
    userID: '',
    caseID: ''
  };

  constructor(private afs: AngularFirestore) {
    this.collectionRef = this.afs.firestore.collection('users');
  }

  getUser(id: string): Promise<User> {
    const docRef: DocumentReference = this.collectionRef.doc(id);
    const user: User = {
      userID : '',
      password : '',
      caseID : '',
    };

    return docRef.get().then(doc => {
      if (doc.exists) {
        const data = doc.data();
        user.userID = id;
        user.password = data.password;
        user.caseID = data.caseToWorkOn;
        return user;
      } else {
        return null;
      }
    });
  }

  checkPassword(pass: string, passToCheck: string): boolean {
    return (pass === passToCheck);
  }

  isUserloggedin(): boolean {
    return (this.currentUser.userID !== '');
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  loginUser(userToLogin: any): Promise<boolean> {
    return this.getUser(userToLogin.userID).then(user => {
      if (user != null) {
        //this checks the hashed password
        var salted: string = userToLogin.password + "thisissalt";
        var hashed: string = this.hash(salted);
        const correctPass: boolean = this.checkPassword(user.password, hashed);
        if (correctPass) {
          this.currentUser.userID = user.userID;
          this.currentUser.caseID = user.caseID;
          return true;
        }
      }
      console.log('How did you get here?');
      return false;
    }).catch((err: Error) => {
      console.log(err.message);
      return false;
    });
  }

  logOutUser(): void {
    this.currentUser.caseID = '';
    this.currentUser.userID = '';
  }

  //this hashes the password
  hash(password: string): string {
    var hash = crypto.createHash("sha256");
    hash.update(password);
    return hash.digest('hex');
  }

}
