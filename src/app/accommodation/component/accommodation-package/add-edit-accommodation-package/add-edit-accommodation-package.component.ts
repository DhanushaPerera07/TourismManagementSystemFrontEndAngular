import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AccommodationPackage} from '../../../../shared/interface/accommodation-package';
import {AccommodationService} from '../../../../shared/service/accommodation/accommodation.service';


@Component({
  selector: 'app-add-edit-accommodation-package',
  templateUrl: './add-edit-accommodation-package.component.html',
  styleUrls: ['./add-edit-accommodation-package.component.scss']
})
export class AddEditAccommodationPackageComponent implements OnInit {

  isAdding!: boolean;
  accommodationPackageForAddOrEdit!: AccommodationPackage;

  constructor(@Inject(MAT_DIALOG_DATA) data: AccommodationPackage,
              private accommodationService: AccommodationService) {
    if (data) {
      if (data.id && data.id !== 0) {
        /* accommodation package has an id,
        * that means, we deal with a update operation. */
        this.isAdding = false;
      }
      this.accommodationPackageForAddOrEdit = data;
    } else {
      /* This means, we deal with a insert new record operation. */
      this.isAdding = true;
      /* empty accommodation package is provided for add a new package */
      this.accommodationPackageForAddOrEdit = this.accommodationService.emptyAccommodationPackage;
    }
  }

  ngOnInit(): void {
  }

}
