import {Injectable} from '@angular/core';
import {TourDetail} from '../interface/tour-detail';
import {StarRatingEnum} from '../enum/star-rating.enum';
import {TourDetailStatusEnum} from '../enum/tour-detail-status.enum';

const DUMMY_TOUR_DETAILS: TourDetail[] = [
  {
    id: 1,
    arrivalDate: new Date(2021, 5, 20),
    departureDate: new Date(2021, 5, 24),
    numberOfChildren: 0,
    numberOfDays: 4,
    numberOfPeople: 4,
    starCategory: StarRatingEnum.FOUR_STAR,
    exchangeRate: 199.56,
    status: TourDetailStatusEnum.POTENTIAL,
    remarks: '',
    tourExecutive: '',
    customerId: 1
  },
  {
    id: 2,
    arrivalDate: new Date(2021, 6, 20),
    departureDate: new Date(2021, 6, 24),
    numberOfChildren: 0,
    numberOfDays: 4,
    numberOfPeople: 4,
    starCategory: StarRatingEnum.THREE_STAR,
    exchangeRate: 199.56,
    status: TourDetailStatusEnum.POTENTIAL,
    remarks: '',
    tourExecutive: '',
    customerId: 2
  }
];

const emptyTourDetail: TourDetail = {
  id: 0,
  arrivalDate: new Date(),
  departureDate: new Date(),
  numberOfChildren: 0,
  numberOfDays: 0,
  numberOfPeople: 0,
  starCategory: StarRatingEnum.FOUR_STAR,
  exchangeRate: 0,
  status: TourDetailStatusEnum.POTENTIAL,
  remarks: '',
  tourExecutive: '',
  customerId: 0
};

@Injectable({
  providedIn: 'root'
})
export class TourDetailService {

  private tourDetails: TourDetail[] = DUMMY_TOUR_DETAILS;
  // tourDetail!: TourDetail;
  selectedTourDetail!: TourDetail;
  emptyTourDetail: TourDetail = emptyTourDetail;

  constructor() {
  }

  /** This method will filter out the TourDetails according to customer ID. */
  getTourDetails(customerId: number): TourDetail[] {
    return this.tourDetails.filter(value => value.customerId === customerId);
  }

  /** This method will find the tour detail by ID.
   * @returns TourDetail if found any,
   * otherwise, returns undefined.
   */
  findTourDetailById(id: number, customerId: number): TourDetail | undefined {
    const result = this.tourDetails.find(value => value.id === id);
    if (result) {
      this.selectedTourDetail = result;
      return this.selectedTourDetail;
    } else {
      return undefined;
    }
  }
}
