import { Service, NedbServiceOptions } from 'feathers-nedb';
import { BadRequest } from '@feathersjs/errors';
import { Application } from '../../declarations';
import { Params } from 'express-serve-static-core';

interface StudentType {
  _id?: string,
  name: string,
  birthday: Date,
  mark: string
}

export class Student extends Service {
  constructor(options: Partial<NedbServiceOptions>, app: Application) {
    super(options);
  }

  create(data: StudentType, params?: Params) {
    if (!data.name) {
      throw new BadRequest('Name cannot be empty')
    }

    if (!data.birthday) {
      throw new BadRequest('Birthday cannot be empty');
    }

    if (!data.mark) {
      throw new BadRequest('Mark cannot be empty')
    }

    const StudentData = {
      name: data.name,
      birthday: data.birthday,
      mark: data.mark
    };
    
    return super.create(StudentData, params);
  }
};
