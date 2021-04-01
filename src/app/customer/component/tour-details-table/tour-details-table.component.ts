import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {TourDetail} from '../../../shared/interface/tour-detail';
import {TourDetailService} from '../../../shared/service/tour-detail.service';
import {Customer} from '../../../shared/interface/customer';
import {AddEditTourDetailsComponent} from '../add-edit-tour-details/add-edit-tour-details.component';
import {TourDetailsViewDataComponent} from '../tour-details-view-data/tour-details-view-data.component';

@Component({
  selector: 'app-tour-details-table',
  templateUrl: './tour-details-table.component.html',
  styleUrls: ['./tour-details-table.component.scss']
})
export class TourDetailsTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [
    'tourDetailID',
    'numberOfDays',
    'numberOfPeople',
    'numberOfChildren',
    'starCategory',
    'arrivalDate',
    'departureDate',
    'status',
    'tourExecutive',
    'options'
  ];

  dataSource!: MatTableDataSource<TourDetail>;

  @Input()
  customer!: Customer;

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  dialogConfig = new MatDialogConfig();
  dialogAddEditConfig = new MatDialogConfig();
  dialogToViewDataRef!: MatDialogRef<TourDetailsViewDataComponent>;
  dialogToAddEditDataRef!: MatDialogRef<AddEditTourDetailsComponent>;

  constructor(private tourDetailService: TourDetailService,
              private router: Router,
              public dialog: MatDialog) {
    /* setting dialog box related configs */
    this.dialogConfig = {
      width: '70%',
      height: '100%',
      disableClose: false
    };

    /* setting dialog box related configs */
    this.dialogAddEditConfig = {
      width: '70%',
      height: '100%',
      disableClose: false
    };
  }

  ngOnInit(): void {
    const result = this.tourDetailService.getTourDetails((this.customer) ? this.customer.id : 0);
    this.dataSource = new MatTableDataSource<TourDetail>(result);
  }

  ngAfterViewInit(): void {
    /* table data pagination process */
    this.dataSource.paginator = this.paginator;

    /* table data sorting process */
    this.dataSource.sort = this.sort;
  }

  /**
   * This method will apply the filtering process for the tour details table.
   * @param filterValue: user Search Input as a string
   */
  public applyFilterToTable(filterValue: string): void {
    this.dataSource.filter = filterValue?.trim().toLowerCase();
  }

  editRecord(element: any): void {
    console.log(element);
    this.dialogAddEditConfig.data = element; // pass the selected tour details object to dialog box
    this.dialogToAddEditDataRef = this.dialog.open(AddEditTourDetailsComponent, this.dialogAddEditConfig);
  }

  deleteRecord(id: any): void {
    console.log(id);
  }

  viewAccommodationRecord(tourDetailRecord: any): void {
    console.log(tourDetailRecord);
    this.dialogConfig.data = tourDetailRecord;
    this.dialogToViewDataRef = this.dialog.open(TourDetailsViewDataComponent, this.dialogConfig);
    // this.dialogToViewDataRef.afterClosed().subscribe(() => {
    //   console.log('view dialog box eka close una');
    // });
    // this.router.navigateByUrl('/accommodation/view/' + row.id);
  }

}
