import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AccommodationPackage} from '../../../../shared/interface/accommodation-package';

@Component({
  selector: 'app-accommodation-package-view-data',
  templateUrl: './accommodation-package-view-data.component.html',
  styleUrls: ['./accommodation-package-view-data.component.scss']
})
export class AccommodationPackageViewDataComponent implements OnInit {

  accommodationPackage: AccommodationPackage;

  constructor(@Inject(MAT_DIALOG_DATA) dialogData: AccommodationPackage) {
    this.accommodationPackage = dialogData;
  }

  ngOnInit(): void {
  }

}
