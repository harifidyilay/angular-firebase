import { Component } from '@angular/core';
import { HeaderDefaultComponent } from './header-default/header-default.component';

@Component({
  selector: 'app-base-header',
  standalone: true,
  imports: [HeaderDefaultComponent],
  templateUrl: './base-header.component.html',
  styleUrl: './base-header.component.scss',
})
export class BaseHeaderComponent {}
