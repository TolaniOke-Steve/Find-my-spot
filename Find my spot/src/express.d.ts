// src/express.d.ts
import * as express from 'express';
import { PassportStatic } from 'passport';
import { Session } from 'express-session';

declare global {
  namespace Express {
    interface Request {
      logIn(user: any, callback: (err: any) => void): void;
      session: Session;
    }
  }
}
