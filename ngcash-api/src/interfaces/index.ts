import { Request } from 'express';
import { User } from '../entities/User';
import { UserJWT } from '../helpers/generateJWT';

export interface IErrorHandler extends Error {
    status: number,
}

export interface MyRequest extends Request {
  user?: UserJWT
}

export type UserLogin = Pick<User, 'username' | 'password'>

export type SimpleUser = {
  username: string,
  password: string,
  account: {
    balance: number
  }
}
