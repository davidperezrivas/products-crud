import { IsNotEmpty } from 'class-validator';

export class DepartmentDto {
    @IsNotEmpty()
    // eslint-disable-next-line indent
    name: string;
}
