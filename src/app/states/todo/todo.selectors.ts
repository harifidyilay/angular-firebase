import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../app.state';
import { todoFeatureKey } from './todo.reducer';

export const getTodoState = createFeatureSelector<Todo[]>(todoFeatureKey);

export const selectTodos = createSelector(getTodoState, (state) => state);
