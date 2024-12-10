import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, User } from '../app.state';
import { userFeatureKey } from './user.reducer';

// 1. Create a feature selector to access the user state
export const getUserState = createFeatureSelector<User[]>(userFeatureKey);

// 2. Create a selector to get the list of users
export const selectUsers = createSelector(getUserState, (state) => state);
