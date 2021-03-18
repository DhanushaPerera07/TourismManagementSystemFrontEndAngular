import {Injectable} from '@angular/core';
import {Accommodation} from '../../interface/accommodation';
import {StarRatingEnum} from '../../enum/star-rating.enum';

export const ACCOMMODATION_DUMMY_DATA: Accommodation[] = [
  {
    id: 1,
    name: 'Lavanga Beach',
    situatedIn: 'Hikkaduwa',
    starRating: StarRatingEnum.THREE_STAR,
    type: 'Hotel',
    contact: '0912 275 941',
    email: '',
    address: '',
    accommodationPackage: [],
    specialDetails: '',
    remarks: ''

  },
  {
    id: 2,
    name: 'Thaproban Beach House',
    situatedIn: 'Unawatuna',
    starRating: StarRatingEnum.FOUR_STAR,
    type: 'Hotel',
    contact: '0914 381 722',
    email: '',
    address: '',
    accommodationPackage: [],
    specialDetails: '',
    remarks: ''
  }
];

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  accommodationData = ACCOMMODATION_DUMMY_DATA;

  constructor() {
  }

  /**
   * this method will send a get request to the backend and retrieve the Accommodation list
   * @returns Accommodation[]
   */
  getAccommodationList(): void { // Accommodation[]
  }
}
