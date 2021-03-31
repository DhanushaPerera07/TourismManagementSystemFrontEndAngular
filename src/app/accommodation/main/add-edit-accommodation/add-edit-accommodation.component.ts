import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {AccommodationService} from '../../../shared/service/accommodation/accommodation.service';
import {Accommodation} from '../../../shared/interface/accommodation';
import {StarRatingEnum} from '../../../shared/enum/star-rating.enum';
import {isNumeric} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-add-edit-accommodation',
  templateUrl: './add-edit-accommodation.component.html',
  styleUrls: ['./add-edit-accommodation.component.scss']
})
export class AddEditAccommodationComponent implements OnInit {

  isAdding!: boolean;
  selectedAccommodation!: Accommodation;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private accommodationService: AccommodationService) {

  }

  ngOnInit(): void {
    /* decide whether we perform a insert operation or update operation */
    if (this.activatedRoute.snapshot.routeConfig?.path === 'edit/:id') {
      /* update operation */
      this.isAdding = false;

      /* get the id parameter from the URL,
     * find the particular accommodation and
     * set accommodationData to selectedAccommodation variable
     */
      this.activatedRoute.params.subscribe((value => {
        const id = Number.parseInt(value.id, 10);
        if (id && Number.isInteger(id)) {
          const accommodationData = this.accommodationService.getAccommodationDetails(id);
          if (accommodationData) {
            this.selectedAccommodation = accommodationData;
          } else {
            console.log('Code 404: Not found accommodation for the given ID');
          }

        } else {
          /* provided ID in the URL is not a number */
          console.error('Provided id in the URL is not valid!');
        }
      }));

    } else {
      /* insert operation */
      this.isAdding = true;
      this.selectedAccommodation = this.accommodationService.emptyAccommodation;
    }

  }

  redirectToAccommodationPage(): void {
    this.router.navigateByUrl('/accommodation');
  }
}
