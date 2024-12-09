import { Component, Input } from '@angular/core';
import { TodoContainerComponent } from '../../pages/todo/todo-container/todo-container.component';
import { CommonModule, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-base-body',
  standalone: true,
  imports: [CommonModule, NgIf, NgSwitch, NgSwitchCase, TodoContainerComponent],
  templateUrl: './base-body.component.html',
  styleUrl: './base-body.component.scss',
})
export class BaseBodyComponent {
  @Input() container: string = 'home';
}
