import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerTableComponent} from '../../../../customer/component/customer-table/customer-table.component';
import {AccommodationTableComponent} from '../accommodation-table/accommodation-table.component';

@Component({
  selector: 'app-accommodation-search-table',
  templateUrl: './accommodation-search-table.component.html',
  styleUrls: ['./accommodation-search-table.component.scss']
})
export class AccommodationSearchTableComponent implements OnInit {

  /* customer table child component */
  @ViewChild(AccommodationTableComponent)
  appAccommodationTable!: AccommodationTableComponent;

  constructor() { }

  ngOnInit(): void {
    if ((document.getElementsByClassName('mat-form-field-wrapper')[0])) {
      ((document.getElementsByClassName('mat-form-field-wrapper')[0]) as HTMLDivElement).style.padding = '0px';
    }
  }

  /* filter the table data according to input value */
  applyFilter(eventTarget: any): void {
    this.appAccommodationTable.applyFilterToTable(eventTarget.value);
  }

  redirectToAddAccommodation(): void {

  }
}
