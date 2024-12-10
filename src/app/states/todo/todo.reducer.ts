import { createReducer, on } from '@ngrx/store';
import { Todo } from '../app.state';
import { addTodo, loadTodos } from './todo.actions';

export const todoFeatureKey = 'todos';

export const initialState: Todo[] = [
  //   { id: '0', description: 'default', status: false },
];

export const todoReducer = createReducer(
  initialState,

  // Base on value initial status |  Example if array
  on(addTodo, (state, { description }) => [
    ...state,
    { id: Date.now().toString(), description, status: false },
  ]),

  on(loadTodos, (state) => state)
);
