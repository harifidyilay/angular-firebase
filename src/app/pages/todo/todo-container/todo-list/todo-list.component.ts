import { Component, OnInit } from '@angular/core';
import { LIST_NOTES } from '../../../../models/mocks/mock-list-notes';
import { JsonPipe, AsyncPipe, NgFor } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  listeNotes = LIST_NOTES;
  public allTodos$ = of(LIST_NOTES);

  ngOnInit(): void {
    // public allTodos$ = this.store.select(selectAllTodos);
  }
}
