import { Component, OnInit } from '@angular/core';
import { LIST_NOTES } from '../../../../models/mocks/mock-list-notes';
import { AsyncPipe, NgFor } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUsers } from '../../../../states/user/user.selectors';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [AsyncPipe, NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  // listeNotes = LIST_NOTES;
  public allTodos$ = of(LIST_NOTES);
  // public allTodos$: Observable<Todo[]>;

  public users$: Observable<any> = of([]);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.users$ = this.store.select(selectUsers);
  }
}
