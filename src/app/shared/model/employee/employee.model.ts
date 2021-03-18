import {Position} from './position.enum';
import {Status} from './status.enum';
import {Gender} from '../../enum/gender.enum';

export class Employee {

  constructor(public id: number = 0,
              public name: string = '',
              public address?: string,
              public dob?: Date,
              public nic?: string,
              public contact?: string,
              public email?: string,
              public gender?: Gender,
              public position?: Position,
              public status?: Status,
              public password?: string | null
  ) {
  }

}
