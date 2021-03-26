import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {AccommodationService} from '../../../../shared/service/accommodation/accommodation.service';
import {Router} from '@angular/router';
import {AccommodationPackage} from '../../../../shared/interface/accommodation-package';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {AccommodationPackageViewDataComponent} from '../accommodation-package-view-data/accommodation-package-view-data.component';

@Component({
  selector: 'app-accommodation-package-table',
  templateUrl: './accommodation-package-table.component.html',
  styleUrls: ['./accommodation-package-table.component.scss']
})
export class AccommodationPackageTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [
    'packageID',
    'validPeriod',
    'roomOnly',
    'bedAndBreakfast',
    'halfBoard',
    'fullBoard',
    'allInclusive',
    'singleRoom',
    'doubleRoom',
    'tripleRoom',
    'family',
    'suite',
    'options'
  ];

  dataSource!: MatTableDataSource<AccommodationPackage>;

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  dialogConfig = new MatDialogConfig();
  dialogToViewDataRef!: MatDialogRef<any>;


  constructor(private accommodationService: AccommodationService,
              private router: Router,
              public dialog: MatDialog) {

    /* setting dialog box related configs */
    this.dialogConfig = {
      width: '70%',
      height: '100%',
      disableClose: false
    };
  }


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<AccommodationPackage>(
      (this.accommodationService.selectedAccommodationData) ?
        this.accommodationService.selectedAccommodationData.accommodationPackage : []);
  }

  ngAfterViewInit(): void {
    /* table data pagination process */
    this.dataSource.paginator = this.paginator;

    /* table data sorting process */
    this.dataSource.sort = this.sort;
  }

  /**
   * This method will apply the filtering process for the accommodation table.
   * @param filterValue: user Search Input as a string
   */
  public applyFilterToTable(filterValue: string): void {
    this.dataSource.filter = filterValue?.trim().toLowerCase();
  }

  editRecord(element: any): void {
    console.log(element);
    // this.dialogToAddEditDataRef = this.dialog.open(AccommodationPackageAddEditDataComponent, this.dialogConfig);
  }

  deleteRecord(id: any): void {
    console.log(id);
  }

  viewAccommodationRecord(accommodationPackage: any): void {
    console.log(accommodationPackage);
    this.dialogConfig.data = accommodationPackage;
    // this.dialogConfig.data = {
    //   accommodationPackageRecord: accommodationPackage
    // };
    this.dialogToViewDataRef = this.dialog.open(AccommodationPackageViewDataComponent, this.dialogConfig);
    this.dialogToViewDataRef.afterClosed().subscribe(() => {
      console.log('view dialog box eka close una');
    });
    // this.router.navigateByUrl('/accommodation/view/' + row.id);
  }
}
