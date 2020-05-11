import client from './client';

// Auth Response Type
export interface AuthResponse {
  _id: string;
  username: string;
}

// User Query Type
export interface UserQuery {
  username: string;
  password: string;
}

// Local Register (POST) /api/auth/register
export const register = ({ username, password }: UserQuery) =>
  client.post<AuthResponse>('/api/auth/register', { username, password });

// Local Login (POST) /api/auth/login
export const login = ({ username, password }: UserQuery) =>
  client.post<AuthResponse>('/api/auth/login', { username, password });

// Logout (POST) /api/auth/logout
export const logout = () => client.post<void>('/api/auth/logout');

// User Check (GET) /api/auth/check
export const check = () => client.get<AuthResponse>('/api/auth/check');
