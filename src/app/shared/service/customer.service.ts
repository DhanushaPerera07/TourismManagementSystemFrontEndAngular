import {Injectable} from '@angular/core';
import {Customer} from '../../interface/customer';
import {Employee} from '../model/employee.model';

/* sample customer data */
const CUSTOMER_DATA: Customer[] = [
  {
    id: 1,
    name: 'John Doe',
    nationality: 'American',
    passportNo: '1234567A',
    email: 'john.doe@gmail.com',
    phone: '202 555 0152 ',
    countryCallingCode: 'US',
    country: 'America',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    additionalNotes: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
    addedDate: new Date(Date.now()),
    addedBy: new Employee(1, 'Sithara Perera')
  },
  {
    id: 2,
    name: 'Samantha Ashley',
    nationality: 'Canadian',
    passportNo: '446565678C',
    email: 'samantha@gmail.com',
    phone: '4165550134',
    countryCallingCode: 'CA',
    country: 'Canada',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    additionalNotes: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
    addedDate: new Date(Date.now()),
    addedBy: new Employee(1, 'Sithara Perera')
  }
];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  /* used for the view-customer component */
  customer!: Customer;

  /* used to edit-customer component */
  customerToBeEdited!: Customer;

  customerList: Customer[] = CUSTOMER_DATA;

  constructor() {
  }
}
