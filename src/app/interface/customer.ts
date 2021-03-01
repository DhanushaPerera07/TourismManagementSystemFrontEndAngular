import {Employee} from '../shared/model/employee.model';

export interface Customer {
  id: number;
  name: string;
  nationality: string;
  passportNo: string;
  email: string;
  phone: string;
  countryCallingCode: any;
  country: string;
  description: string;
  additionalNotes: string;
  addedDate: Date;
  addedBy: Employee;
}
