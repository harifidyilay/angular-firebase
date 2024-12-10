import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environments';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { userFeatureKey, userReducer } from './states/user/user.reducer';
import { todoFeatureKey, todoReducer } from './states/todo/todo.reducer';
// import { todoReducer } from './states/todos/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),

    // Initialise firebase
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),

    // Initialise ngrx
    provideStore(),
    provideState({ name: userFeatureKey, reducer: userReducer }),
    provideState({ name: todoFeatureKey, reducer: todoReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
  ],
};
