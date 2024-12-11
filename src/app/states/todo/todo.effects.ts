import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { TodoService } from '../../services/todo.service';
import { loadTodos, loadTodosFailure, loadTodosSuccess } from './todo.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { exhaustMap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';

@Injectable()
export class TodoEffects {
  public loadTodo$: Observable<any> = of();

  constructor(private actions$: Actions, private todoService: TodoService) {
    this.loadTodo$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(loadTodos),
          switchMap(() =>
            from(this.todoService.getListNotes()).pipe(
              map((todos) => loadTodosSuccess({ todos: todos })),
              catchError((error) => of(loadTodosFailure({ error })))
            )
          )
        ),
      { dispatch: true }
    );
  }
}
