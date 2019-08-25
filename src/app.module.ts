import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';
import { LoggerMiddleware } from './core/middleware/logger.middleware';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './core/error-handling/filters/all-exceptions.filter';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter
    }
  ],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer): void {

      // apply logger middleware for all routes within `/api`
      consumer.apply(LoggerMiddleware)
        .forRoutes({ path: '', method: RequestMethod.ALL });
    }
}
