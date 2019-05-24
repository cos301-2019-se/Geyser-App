import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference, CollectionReference } from '@angular/fire/firestore';

export interface User {
  userID: string;
  password: string;
  userType: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private collectionRef: CollectionReference;
  currentUser = {
    userID: '',
    userType: ''
  };

  constructor(private afs: AngularFirestore) {
    this.collectionRef = this.afs.firestore.collection('users');
  }

  getUser(id: string): Promise<User> {
    const docRef: DocumentReference = this.collectionRef.doc(id);
    const user: User = {
      userID : '',
      userType : '',
      password : ''
    };

    return docRef.get().then(doc => {
      if (doc.exists) {
        const data = doc.data();
        user.userID = id;
        user.password = data.password;
        user.userType = data.userType;
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
        // TODO: hash the password
        const correctPass: boolean = this.checkPassword(user.password, userToLogin.password);
        if (correctPass) {
          this.currentUser.userID = user.userID;
          this.currentUser.userType = user.userType;
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
    this.currentUser.userType = '';
    this.currentUser.userID = '';
  }

}
