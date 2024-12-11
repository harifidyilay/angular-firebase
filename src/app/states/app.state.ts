export interface AppState {
  users: User[];
  todos: Todo[];
  auth: Auth;
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

export interface Auth {
  token: string;
  expiresIn: number;
}
