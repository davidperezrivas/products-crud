import { PartialType } from '@nestjs/mapped-types';
import { DepartmentDto } from './create-department.dto';

export class UpdateDepartmentDto extends PartialType(DepartmentDto) {}
