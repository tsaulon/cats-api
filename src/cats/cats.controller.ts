import { Controller, Get, Req, Res, Next, Delete, Query, Body, Post, Put } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CatService } from '../core/services/cat/cat.service';
import { ICat } from '../core/interfaces/cat.interface';

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
    addOne(@Body() cat: ICat): void {
        this.cats.addOne(cat);
    }

    @Put()
    updateCat(@Body() update: ICat): void {
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
