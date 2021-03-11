import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodation-search-table',
  templateUrl: './accommodation-search-table.component.html',
  styleUrls: ['./accommodation-search-table.component.scss']
})
export class AccommodationSearchTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ((document.getElementsByClassName('mat-form-field-wrapper')[0]) as HTMLDivElement).style.padding = '0px';
  }

  /* filter the table data according to input value */
  applyFilter(eventTarget: any): void {

  }

  redirectToAddAccommodation(): void {

  }
}
