import { createReducer, on } from '@ngrx/store';
import { User } from '../app.state';
import { loadUsers, usersLoaded } from './user.actions';

export const userFeatureKey = 'users';

export const initialState: User[] = [
  { id: '0', name: 'admin', email: 'admin@yopmail.com' },
];

export const userReducer = createReducer(
  initialState,
  on(loadUsers, () => initialState),
  on(usersLoaded, (state, { users }) => users)
);
