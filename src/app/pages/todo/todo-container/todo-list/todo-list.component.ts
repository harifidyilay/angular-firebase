import { Component, OnInit } from '@angular/core';
import { LIST_NOTES } from '../../../../models/mocks/mock-list-notes';
import { AsyncPipe, NgFor } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUsers } from '../../../../states/user/user.selectors';
import { selectTodos } from '../../../../states/todo/todo.selectors';
import { loadTodos } from '../../../../states/todo/todo.actions';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [AsyncPipe, NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  // listeNotes = LIST_NOTES;
  // public allTodos$ = of(LIST_NOTES);
  public allTodos$: Observable<any> = of([]);
  public users$: Observable<any> = of([]);

  constructor(private store: Store) {
    this.users$ = this.store.select(selectUsers);
    this.allTodos$ = this.store.select(selectTodos);
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }

  clickReloadListTask() {
    this.store.dispatch(loadTodos());
  }
}
