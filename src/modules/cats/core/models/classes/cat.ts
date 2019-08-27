import { ICat } from '../interfaces/cat.interface';
import { IsString, IsInt} from 'class-validator';
export class updateCatDto implements ICat {

    @IsInt()
    readonly id: number;

    @IsString()
    readonly name: string;
}