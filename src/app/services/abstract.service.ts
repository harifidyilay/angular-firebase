import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class AbstractService {
  protected _baseURL = environment.baseUrlPhp + '/';

  protected _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(protected http: HttpClient) {}

  async handleError(error: HttpErrorResponse, displayError: boolean = false) {
    let serverError;
    let message = 'Server error occured';
    let status = -1;
    let value;

    if (error.error instanceof ErrorEvent) {
      message = 'A server error occurred: ' + error.error.message;
    } else {
      serverError = error.error as ServerError;

      if (serverError.message) {
        message = serverError.message;
        status = serverError.status;
        value = serverError.value;
      } else {
        if (error.status == 504) {
          message = 'Server is not responding';
        } else {
          message =
            `Backend returned code ${error.status}, ` +
            `body: ${error.error.error?.message || error.error.message}`;
        }
      }
    }
    return new ServerError(message, status, value);
  }

  get baseURL(): string {
    return this._baseURL;
  }

  get httpOptions() {
    return this._httpOptions;
  }
}

export class ServerError {
  constructor(
    public message: string,
    public status: number,
    public value: any
  ) {}
}
