import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {AccommodationPackageTableComponent} from '../accommodation-package-table/accommodation-package-table.component';
import {AddEditAccommodationPackageComponent} from '../add-edit-accommodation-package/add-edit-accommodation-package.component';

@Component({
  selector: 'app-accommodation-package-search-table',
  templateUrl: './accommodation-package-search-table.component.html',
  styleUrls: ['./accommodation-package-search-table.component.scss']
})
export class AccommodationPackageSearchTableComponent implements OnInit {

  /* accommodation package table child component */
  @ViewChild(AccommodationPackageTableComponent)
  accommodationPackageComponent!: AccommodationPackageTableComponent;

  dialogConfig = new MatDialogConfig();
  dialogToAddEditDataRef!: MatDialogRef<any>;

  constructor(public dialog: MatDialog) {
    /* setting dialog box related configs */
    this.dialogConfig = {
      width: '70%',
      height: '100%',
      disableClose: false
    };
  }

  ngOnInit(): void {
    if ((document.getElementsByClassName('mat-form-field-wrapper')[0])) {
      ((document.getElementsByClassName('mat-form-field-wrapper')[0]) as HTMLDivElement).style.padding = '0px';
    }
  }

  applyFilter(eventTarget: any): void {
    this.accommodationPackageComponent.applyFilterToTable(eventTarget.value);
  }

  openAddEditAccommodationPackage(): void {
    this.dialogToAddEditDataRef = this.dialog.open(AddEditAccommodationPackageComponent, this.dialogConfig);
    // this.dialogToAddEditDataRef.afterClosed().subscribe(() => {
    //   console.log('Add accommodation package dialog box closed!');
    // });
  }
}
