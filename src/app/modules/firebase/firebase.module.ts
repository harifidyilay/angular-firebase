import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environments';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth'; // For authentication
// import { AngularFirestoreModule } from '@angular/fire/firestore'; // For Firestore

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // AngularFireModule.initializeApp(environment.firebase), // Initialize Firebase app
    // AngularFireAuthModule, // Import Auth module
    // AngularFirestoreModule, // Import Firestore module
  ],
})
export class FirebaseModule {}
