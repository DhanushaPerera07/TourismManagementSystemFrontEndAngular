import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {CustomerTableComponent} from './component/customer-table/customer-table.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

/*  /!* customer table child component *!/
  @ViewChild(CustomerTableComponent)
  appCustomerTable!: CustomerTableComponent;*/

  constructor() {
  }

  ngOnInit(): void {
  }

/*  /!**
   * This method will call and
   * pass the user search input string to the child component
   * applyFilterToTable(value: string) function.
   * @param eventTarget: $event.target
   *!/
  applyFilter(eventTarget: any): void {
    this.appCustomerTable.applyFilterToTable(eventTarget.value);
  }*/

}
