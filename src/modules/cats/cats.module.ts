import { Module, ValidationPipe } from '@nestjs/common';
import { CatsController } from './controllers/cats/cats.controller';
import { CatService } from './core/services/cat/cat.service';
import { APP_PIPE } from '@nestjs/core';

@Module({
    controllers: [
        CatsController
    ],
    providers: [
        CatService,
        {
            provide: APP_PIPE,
            useClass: ValidationPipe
        }
    ],
})
export class CatsModule {}
