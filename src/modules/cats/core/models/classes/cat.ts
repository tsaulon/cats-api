import { ICat } from '../interfaces/cat.interface';
import { IsString, IsInt} from 'class-validator';
export class Cat implements ICat {

    @IsInt()
    readonly id?: number;

    @IsString()
    readonly name: string;
}