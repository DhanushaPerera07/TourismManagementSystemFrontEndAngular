import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Customer} from '../../interface/customer';

/* sample customer data */
const CUSTOMER_DATA: Customer[] = [
  {
    id: 1,
    name: 'John Doe',
    nationality: 'American',
    passportNo: '1234567A',
    email: 'john.doe@gmail.com',
    phone: '202 555 0152 ',
    country: 'America',
    addedDate: new Date(Date.now())
  },
  {
    id: 2,
    name: 'Samntha Ashley',
    nationality: 'Canadian',
    passportNo: '446565678C',
    email: 'samantha@gmail.com',
    phone: '064 789 4516 ',
    country: 'Canada',
    addedDate: new Date(Date.now())
  }
];

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {

  /* Table columns for the Customer table */
  displayedColumns: string[] = [
    'Customer ID',
    'Name',
    'Nationality',
    'Country',
    'Passport No',
    'Email',
    'Phone',
    'Add Date',
    'Options'
  ];

  /* Data source for the customer table */
  dataSource = new MatTableDataSource(CUSTOMER_DATA);

  constructor() {
  }


  ngOnInit(): void {

  }

  /**
   * This method will apply the filtering process for the customer table.
   * @param filterValue: user Search Input as a string
   */
  public applyFilterToTable(filterValue: string): void {
    this.dataSource.filter = filterValue?.trim().toLowerCase();
  }

  /**
   * This method will display a dialog box and
   * display information related to particular selected customer record
   */
  viewCustomerRecord(row: any): void {
    /* open a dialog box */
    /* show all information related to customer record in that dialog box */
  }
}
