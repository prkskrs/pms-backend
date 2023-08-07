import { Request as ExpressRequest } from 'express';
import { User } from 'src/users/users.schema';

export interface SignUpInterface {
    token: string;
    message?: string;
}

export interface LoginInterface {
    data: object;
    token: string;
    message?: string;
}

export interface CustomRequest extends ExpressRequest {
    user: User; // Adjust 'any' to the actual type of the user object if known
  }