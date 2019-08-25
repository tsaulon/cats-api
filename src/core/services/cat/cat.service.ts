import { Injectable } from '@nestjs/common';
import { ICat } from '../../interfaces/cat.interface';

@Injectable()
export class CatService {

    cats: ICat[];

    constructor() {
        this.cats = [];
    }

    findAll(): ICat[] {
        return this.cats;
    }

    findOne(id: number): ICat {

        id = this.parseInt(id);

        return this.cats.find(cat => {
            return cat.id == id;
        });
    }

    addOne(cat: ICat): void {
        this.cats.push({ id: this.cats.length + 1, ...cat });
    }

    updateOne(cat: ICat): void {
        cat.id = this.parseInt(cat.id);
        const updateIndex = this.cats.findIndex(cat => cat.id === cat.id);

        if (updateIndex > -1)
            this.cats[updateIndex] = cat;
    }

    deleteOne(id: number): void {
        id = this.parseInt(id);

        const index: number = this.cats.findIndex(cat => cat.id === id);
        this.cats.splice(index, 1);
    }

    deleteMany(ids: number[]) {

        ids = ids.map(id => this.parseInt(id));

        this.cats = this.cats.filter(cats => {
            return ids.find(id => id === cats.id);
        });
    }

    private parseInt(integer: any) {
        if (typeof integer !== 'number') {
            return Number.parseInt(integer);
        }
    }
}
