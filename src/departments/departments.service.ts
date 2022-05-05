import { UpdateDepartmentDto } from './dto/update-department.dto';
import { DepartmentDto } from './dto/create-department.dto';
import { Department } from './schema/department.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class DepartmentsService {
    constructor(@InjectModel(Department.name) private _departmentModel: Model<Department>) {}

    create(createDepartment: DepartmentDto) {
        const createdDepartment = new this._departmentModel(createDepartment);
        return createdDepartment.save();
    }

    findAll() {
        return 'This action returns all departments';
    }

    findOne(id: number) {
        return `This action returns a #${id} department`;
    }

    update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
        return `This action updates a #${id} department`;
    }

    remove(id: number) {
        return `This action removes a #${id} department`;
    }
}
