import {Component, Inject, OnInit} from '@angular/core';
import {TourDetail} from '../../../shared/interface/tour-detail';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-tour-details-view-data',
  templateUrl: './tour-details-view-data.component.html',
  styleUrls: ['./tour-details-view-data.component.scss']
})
export class TourDetailsViewDataComponent implements OnInit {

  tourDetail: TourDetail;

  constructor(@Inject(MAT_DIALOG_DATA) data: TourDetail) {
    this.tourDetail = data;
  }

  ngOnInit(): void {
  }

}
