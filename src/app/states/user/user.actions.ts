import { createAction, props } from '@ngrx/store';
import { User } from '../app.state';

export const loadUsers = createAction('[Users] Load Users');
export const usersLoaded = createAction(
  '[Users] Users loaded',
  props<{ users: User[] }>()
);
