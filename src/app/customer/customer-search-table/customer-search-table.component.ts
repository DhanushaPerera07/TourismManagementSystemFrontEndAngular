import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CustomerTableComponent} from '../customer-table/customer-table.component';


@Component({
  selector: 'app-customer-search-table',
  templateUrl: './customer-search-table.component.html',
  styleUrls: ['./customer-search-table.component.scss']
})
export class CustomerSearchTableComponent implements OnInit, AfterViewInit {


  /* customer table child component */
  @ViewChild(CustomerTableComponent)
  appCustomerTable!: CustomerTableComponent;

  constructor(
    // private customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log(this.customerService.appCustomerTable);
  }

  /**
   * This method will call and
   * pass the user search input string to the child component
   * applyFilterToTable(value: string) function.
   * @param eventTarget: $event.target
   */
  applyFilter(eventTarget: any): void {
    // console.log(this.customerService.appCustomerTable);
    // this.customerService.appCustomerTable.applyFilterToTable(eventTarget.value);
    console.log(this.appCustomerTable);
    this.appCustomerTable.applyFilterToTable(eventTarget.value);
  }

}
