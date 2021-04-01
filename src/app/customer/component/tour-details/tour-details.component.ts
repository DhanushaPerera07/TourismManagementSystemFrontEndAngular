import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TourDetailsTableComponent} from '../tour-details-table/tour-details-table.component';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {AddEditTourDetailsComponent} from '../add-edit-tour-details/add-edit-tour-details.component';
import {Customer} from '../../../shared/interface/customer';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss']
})
export class TourDetailsComponent implements OnInit {

  @Input()
  customer!: Customer;

  @ViewChild(TourDetailsTableComponent)
  tourDetailsTableComponent!: TourDetailsTableComponent;

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
  }

  applyFilter(eventTarget: any): void {
    this.tourDetailsTableComponent.applyFilterToTable(eventTarget.value);
  }

  openAddEditTourDetail(): void {
    this.dialogToAddEditDataRef = this.dialog.open(AddEditTourDetailsComponent, this.dialogConfig);
  }

}
