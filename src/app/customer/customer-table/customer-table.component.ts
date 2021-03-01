import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {CustomerService} from '../../shared/service/customer.service';


@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit, AfterViewInit {

  /* Table columns for the Customer table */
  displayedColumns: string[] = [
    'id',
    'name',
    'nationality',
    'country',
    'passportNo',
    'email',
    'phone',
    'add Date',
    'options'
  ];

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  /* Data source for the customer table */
  dataSource = new MatTableDataSource(this.customerService.customerList);


  constructor(private route: Router,
              private customerService: CustomerService) {
  }


  ngOnInit(): void {
    /* table data pagination process */
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    /* table data sorting process */
    this.dataSource.sort = this.sort;
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
    this.customerService.customer = row; // row = selected customer
    this.route.navigateByUrl('customer/view/' + row.id);
  }

  editCustomerRecord(element: any): void {
    console.log(element);
    this.customerService.customerToBeEdited = element;
    this.route.navigateByUrl('customer/edit/' + element.id);
    // alert('edit successful...!');
  }
}
