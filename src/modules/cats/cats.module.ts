import { Module } from '@nestjs/common';
import { CatsController } from './controllers/cats/cats.controller';
import { CatService } from './core/services/cat/cat.service';

@Module({
    controllers: [
        CatsController
    ],
    providers: [
        CatService
    ],
})
export class CatsModule {}
