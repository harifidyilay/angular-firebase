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
import { authFeatureKey, authReducer } from './states/auth/auth.reducer';
import { provideEffects } from '@ngrx/effects';
import { TodoEffects } from './states/todo/todo.effects';
import { provideHttpClient } from '@angular/common/http';

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
    provideStoreDevtools({ maxAge: 25, logOnly: false }),

    provideState({ name: userFeatureKey, reducer: userReducer }),
    provideState({ name: todoFeatureKey, reducer: todoReducer }),
    provideState({ name: authFeatureKey, reducer: authReducer }),

    // provideEffects([TodoEffects]),
    provideEffects(TodoEffects),

    provideHttpClient(),
  ],
};
