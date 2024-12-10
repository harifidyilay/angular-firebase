import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo } from '../../../../states/todo/todo.actions';
// import { addTodo } from '../../../../states/todos/todo.actions';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent implements OnInit {
  TodoForm = new FormGroup({
    id: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSubmit() {
    // Step 1 :  Template dispatch action only
    const description: string = String(this.TodoForm.value.description);

    if (description.trim().length != 0) {
      console.log('Note valid submit ... ');
      this.store.dispatch(addTodo({ description: description }));
    } else {
      console.warn('Note invalid ...');
    }
  }
}
