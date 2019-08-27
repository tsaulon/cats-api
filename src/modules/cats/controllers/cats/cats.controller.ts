import { Controller, Get, Delete, Query, Body, Post, Put, UsePipes } from '@nestjs/common';
import { CatService } from '../../core/services/cat/cat.service';
import { ICat } from '../../core/models/interfaces/cat.interface';
import { JoiValidationPipe } from '../../core/pipes/joi-validation';
import { createCatSchema } from '../../core/models/schemas/create-cat.schema';
import { ValidationPipe } from '../../core/pipes/validation.pipe';
import { updateCatDto } from '../../core/models/classes/cat';

@Controller('cats')
export class CatsController {

    constructor(private cats: CatService) { }


    @Get()
    findOne(@Query() query: { id: number }): ICat {
        return this.cats.findOne(query.id);
    }

    @Get()
    findAll(): ICat[] {
        return this.cats.findAll();
    }

    @Post()
    @UsePipes(new JoiValidationPipe(createCatSchema))
    addOne(@Body() cat: ICat): void {
        this.cats.addOne(cat);
    }

    @Put()
    updateCat(@Body(new ValidationPipe()) update: updateCatDto): void {
        this.cats.updateOne(update);
    }

    @Delete()
    deleteOne(@Query() query: { id: number }): void {
        this.cats.deleteOne(query.id);
    }

    @Delete()
    deleteMany(@Body() body: { ids: number[] }): void {
        this.cats.deleteMany(body.ids);
    }

}
