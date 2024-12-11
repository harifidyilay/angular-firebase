import { Injectable } from '@angular/core';
// import { Storage } from '@ionic/storage-angular';
import { Todo } from '../models/interfaces/todo.model';
import { environment } from '../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, first } from 'rxjs';
import { AbstractService } from './abstract.service';

@Injectable({ providedIn: 'root' })
export class TodoService extends AbstractService {
  private baseUrlPhp = environment.baseUrlPhp;
  private token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb3Zhc29hLmlsYXlAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzM4OTE4NDIsImV4cCI6MTczMzg5NTQ0Mn0.uMC3oYGkom4VkVH9-ppI2EPkKfArxoXQT9OtLK_LBIE';
  private storageInitialised = false;

  // constructor(private storage: Storage) {}
  constructor(protected override http: HttpClient) {
    super(http);
  }

  async getTodos(): Promise<Todo[]> {
    //if (!this.storageInitialised) await this.storage.create();
    // return (await this.storage.get('todos')) || [];
    return [];
  }

  async saveTodos(todos: Todo[]) {
    //if (!this.storageInitialised) await this.storage.create();
    // return this.storage.set('todos', todos);
    return null;
  }

  getListNotes() {
    const headers = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
    let result = this.http.get<any>('/api/notes', {
      headers,
    });
    return result;
  }
}
