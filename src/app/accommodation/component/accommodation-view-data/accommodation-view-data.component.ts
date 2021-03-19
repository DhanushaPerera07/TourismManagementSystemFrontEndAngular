import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StarRatingEnum} from '../../../shared/enum/star-rating.enum';
import {AccommodationService} from '../../../shared/service/accommodation/accommodation.service';
import {Accommodation} from '../../../shared/interface/accommodation';

@Component({
  selector: 'app-accommodation-view-data',
  templateUrl: './accommodation-view-data.component.html',
  styleUrls: ['./accommodation-view-data.component.scss']
})
export class AccommodationViewDataComponent implements OnInit, AfterViewInit {

  starRatings!: number[];

  accommodation!: Accommodation;

  constructor(private accommodationService: AccommodationService) {
    this.accommodation = this.accommodationService.selectedAccommodationData;
  }

  ngOnInit(): void {
    this.setStars(this.accommodation.starRating);
    console.log(JSON.stringify(this.accommodation));
  }

  ngAfterViewInit(): void {
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


}
