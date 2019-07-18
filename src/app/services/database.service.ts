import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, DocumentReference} from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';

@Injectable({providedIn: 'root'})
export class DatabaseService {

  private collectionRef: CollectionReference;

  constructor(private afs: AngularFirestore, private afStore: AngularFireStorage) {
    this.collectionRef = this.afs.firestore.collection('geyser');
  }

  createDocument(id: string, data: any): Promise<any> {
    return this.collectionRef.doc(id).set(data);
  }

  setCaseStatusComplete(id: string, user: string): Promise<any> {

    this.afs.firestore.collection('users').doc(user).update({
      caseToWorkOn: 'none'
    });

    return this.afs.firestore.collection('caseDetails').doc(id).update({
      caseStatus: 'completed'
    });
  }

  upload(path: string, name: string, file: any) {
    // const ref = this.afStore.storage.ref('images/');
    const ref = this.afStore.storage.ref();
    // const task = ref.child(`${str}`).put(file);
    alert(`images/${path}/${name}`);
    const task = ref.child(`images/${path}/${name}`).putString(file, 'data_url');

    //   var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
    // this.afStore.upload(path, file);
  }
}
