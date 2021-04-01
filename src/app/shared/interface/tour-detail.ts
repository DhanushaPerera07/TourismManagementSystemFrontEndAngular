import {StarRatingEnum} from '../enum/star-rating.enum';
import {TourDetailStatusEnum} from '../enum/tour-detail-status.enum';

export interface TourDetail {
  id: number;
  numberOfPeople: number;
  numberOfChildren: number;
  numberOfDays: number;
  starCategory: StarRatingEnum;
  arrivalDate: Date;
  departureDate: Date;
  tourExecutive?: string;
  exchangeRate?: number;
  status?: TourDetailStatusEnum;
  remarks?: string;
  customerId: number;
}
