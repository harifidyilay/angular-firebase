import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@Component({
  selector: 'app-todo-container',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.scss',
})
export class TodoContainerComponent {}
