import {Injectable, ViewChild} from '@angular/core';
import {Customer} from '../../interface/customer';
import {Employee} from '../model/employee.model';
import {CustomerTableComponent} from '../../customer/customer-table/customer-table.component';

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
    addedDate: new Date(Date.now()),
    addedBy: new Employee(1, 'Sithara Perera')
  }
];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer!: Customer;

  customerList: Customer[] = CUSTOMER_DATA;

  /* customer table child component */
  // @ViewChild(CustomerTableComponent)
  // appCustomerTable!: CustomerTableComponent;

  constructor() {
  }
}
