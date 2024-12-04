import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getItems(): Observable<any[]> {
    const itemsCollection = collection(this.firestore, 'utilisateurs');
    return collectionData(itemsCollection, { idField: 'nom' }) as Observable<
      any[]
    >;
  }
}
