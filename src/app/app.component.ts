import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirebaseModule } from './modules/firebase/firebase.module';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { FirestoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirebaseModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-firebase';
  firestore: Firestore = inject(Firestore);
  items: Observable<any[]> = of();

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.items = this.firestoreService.getItems();
  }
}
