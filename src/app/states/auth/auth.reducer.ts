import { createReducer, on } from '@ngrx/store';
import { Auth } from '../app.state';

export const authFeatureKey = 'auth';

export const initialState: Auth = {
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb3Zhc29hLmlsYXlAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzM4NTM5MTMsImV4cCI6MTczMzg1NzUxM30.KpDat2SUDlKT1QhEDvjJquffbt5P94Tseoa16TtUOjA',
  expiresIn: 3600000,
};

export const authReducer = createReducer(
  initialState
  // Action synchronisation | Base on value initial status |  Example if array
);
