import {AfterViewInit, Component, OnInit} from '@angular/core';
import {StarRatingEnum} from '../../../../shared/enum/star-rating.enum';
import {AccommodationService} from '../../../../shared/service/accommodation/accommodation.service';
import {Accommodation} from '../../../../shared/interface/accommodation';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-accommodation-view-data',
  templateUrl: './accommodation-view-data.component.html',
  styleUrls: ['./accommodation-view-data.component.scss']
})
export class AccommodationViewDataComponent implements OnInit, AfterViewInit {

  starRatings!: number[];

  accommodation!: Accommodation;

  constructor(private accommodationService: AccommodationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    // this.accommodation = this.accommodationService.selectedAccommodationData;
  }

  ngOnInit(): void {

    // console.log(JSON.stringify(this.accommodation));
    this.activatedRoute.params.subscribe((value => {
      const id = Number.parseInt(value.id, 10);
      if (Number.isInteger(id)) {
        const result = this.accommodationService.getAccommodationDetails(id);
        if (result) {
          this.accommodation = result;
          this.setStars(this.accommodation.starRating);
        } else {
          console.error('Error: 404 - No accommodation record found for that ID');
          this.router.navigateByUrl('/accommodation');
        }
      } else {
        console.error('Error: 400 - Invalid ID in the URL');
        this.router.navigateByUrl('/accommodation');
      }
    }));
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
