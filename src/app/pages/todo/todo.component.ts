import { Component } from '@angular/core';
import { LayoutDefaultComponent } from '../../layouts/layout-default/layout-default.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [LayoutDefaultComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {}
