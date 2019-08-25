import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';
import { LoggerMiddleware } from './core/middleware/logger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer): void {

      // apply logger middleware for all routes within `/api`
      consumer.apply(LoggerMiddleware)
        .forRoutes({ path: '', method: RequestMethod.ALL });
    }
}
