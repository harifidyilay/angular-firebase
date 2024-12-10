export interface AppState {
  users: User[];
  todos: Todo[];
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Todo {
  id: string;
  description: string;
  status: boolean;
}
