import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {

    if (req.query.throwError) {
      throw new Error('I was told to throw this error. Meow.');
    }

    console.log(`Request to endpoint: ${req.originalUrl}`);
    next();
  }
}
