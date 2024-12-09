import { Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { HomeComponent } from './pages/home/home.component';
import { FirstComponent } from './shared-component/first/first.component';
import { SecondComponent } from './shared-component/second/second.component';

export const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  { path: '**', component: SecondComponent },
];
