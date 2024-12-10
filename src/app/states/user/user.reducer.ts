import { createReducer, on } from '@ngrx/store';
import { User } from '../app.state';
import { loadUsers, usersLoaded } from './user.actions';

export const userFeatureKey = 'users';

export const initialState: User[] = [];

export const userReducer = createReducer(
  initialState,
  on(loadUsers, () => initialState),
  on(usersLoaded, (state, { users }) => users)
);
