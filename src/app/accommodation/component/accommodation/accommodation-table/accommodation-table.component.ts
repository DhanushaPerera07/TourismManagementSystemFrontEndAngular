import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {AccommodationService} from '../../../../shared/service/accommodation/accommodation.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {Accommodation} from '../../../../shared/interface/accommodation';
import {Router} from '@angular/router';
import {StarRatingEnum} from '../../../../shared/enum/star-rating.enum';

@Component({
  selector: 'app-accommodation-table',
  templateUrl: './accommodation-table.component.html',
  styleUrls: ['./accommodation-table.component.scss']
})
export class AccommodationTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [
    'accommodationId',
    'name',
    'situatedIn',
    'noOfStars',
    'type',
    'options'
  ];

  dataSource: MatTableDataSource<Accommodation>;
  starRatings!: number[];

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private accommodationService: AccommodationService,
              private router: Router) {
    this.dataSource = new MatTableDataSource<Accommodation>(this.accommodationService.accommodationData);
  }


  ngOnInit(): void {
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
    this.router.navigateByUrl('/accommodation/edit/' + element.id);
  }

  deleteRecord(id: any): void {
    console.log(id);
  }

  viewAccommodationRecord(row: any): void {
    console.log(row);
    this.router.navigateByUrl('/accommodation/view/' + row.id);
  }


  setStars(starRating: StarRatingEnum): void {
    const starRatingNumber = Number.parseInt(starRating.toString(), 10);
    if (starRatingNumber === -1) {
      this.starRatings = [];
    } else {
      this.starRatings = [];
      for (let i = 0; i < starRatingNumber; i++) {
        this.starRatings.push(i);
      }
    }
  }

  getStarRatings(starRating: StarRatingEnum): number[] {
    this.setStars(starRating);
    return this.starRatings;
  }
}
