import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ description: string }>()
);

export const loadTodos = createAction('[Todo Page] Load Todos');
