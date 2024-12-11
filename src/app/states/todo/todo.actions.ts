import { createAction, props } from '@ngrx/store';
import { Todo } from '../app.state';

export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ description: string }>()
);

export const loadTodos = createAction('[Todo Page] Load Todos');
export const loadTodosSuccess = createAction(
  '[User] Load Todos Success',
  props<{ todos: Todo[] }>()
);
export const loadTodosFailure = createAction(
  '[User] Load Todos Failure',
  props<{ error: any }>()
);
