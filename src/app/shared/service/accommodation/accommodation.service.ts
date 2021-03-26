import {Injectable} from '@angular/core';
import {Accommodation} from '../../interface/accommodation';
import {StarRatingEnum} from '../../enum/star-rating.enum';
import {AccommodationPackage} from '../../interface/accommodation-package';

export const ACCOMMODATION_DUMMY_DATA: Accommodation[] = [
  {
    id: 1,
    name: 'Lavanga Resort & Spa',
    situatedIn: 'Hikkaduwa',
    starRating: StarRatingEnum.THREE_STAR,
    type: 'Hotel',
    contact: '0912 275 941',
    email: 'sales@lavanga.lk',
    address: 'Lavanga Resort & Spa, Patuwatha, Hikkaduwa, Sri Lanka.\n',
    website: 'https://www.lavanga.lk',
    accommodationPackage: [
      {
        id: 1,
        mealPlan: {
          id: 1,
          roomOnly: 10,
          bedAndBreakfast: 20,
          halfBoard: 30,
          fullBoard: 40,
          allInclusive: 45,
          remarks: '',
          accommodationPackageId: 1
        },
        roomPlan: {
          id: 1,
          singleRoom: 50,
          doubleRoom: 60,
          tripleRoom: 70,
          quadRoom: 80,
          family: 85,
          suite: 70,
          accommodationPackageId: 1
        },
        childPlan: {
          id: 1,
          isChildPlanAvailable: false,
          cost: 0,
          accommodationPackageId: 1
        },
        guidePlan: {
          id: 1,
          isGuideRoomSupplied: false,
          guideRoom: 0,
          accommodationPackageId: 1
        },
        validPeriod: 'NOV-APRIL-2021-WINTER', // MAY-OCT-2021-SUMMER
        isLatestPackage: true,
        dateCreated: new Date(Date.now()),
        accommodationId: 1
      }
    ],
    specialDetails: 'Lavanga, Cinnamon flower bud in old Sinhalese, is a luxury beach resort where inner peace is a way of life and famous for the beach and wildlife. Guests can experience a unique and personalized service that only exists in a family-run beach resort. The resort is perched on the world famous Hikkaduwa beach, just 3 kilometers from the city center. Resorts magical sunsets and ocean front view is complemented by a white-sand beach. With the wide range of facilities available at the property. Lavanga resort is famous among the honeymooners, families for beach holidays in Sri Lanka.\n' +
      '\n' +
      'Lavanga Resort & Spa comprises 60 various types of Suites and Standard rooms, Restaurant, Swimming pool, Spa, Cinema, Library, Extensive Gymnasium, Kids play center, Water sports activities and many more.\n' +
      '\n' +
      'In short, the ideal location for couples, honeymooners and family to escape from the hectic pace of everyday life and to create unforgettable memories.',
    remarks: ''

  },
  {
    id: 2,
    name: 'Thaproban Beach House',
    situatedIn: 'Unawatuna',
    starRating: StarRatingEnum.FOUR_STAR,
    type: 'Hotel',
    contact: '0914 381 722',
    email: 'info@thambapannileisure.com',
    address: 'Thaproban Rooms & Restaurant, Unawatuna\n' +
      'Galle,\n' +
      'Sri Lanka.',
    website: 'http://www.thambapannileisure.com/thaproban_beach_house_unawatuna/index.php',
    accommodationPackage: [],
    specialDetails: 'Set on sheltered Unawatuna Beach along the Indian Ocean, this breezy hotel is 4 km from Rumassala Sanctuaries Jungle, and 7 km from the 16th-century Galle Fort.\n' +
      '\n' +
      'Warm, elegant rooms come with air-conditioning, flat-screens and minibars, as well as balconies, most with partial or full ocean views. Some have canopy beds with mosquito netting. Penthouse suites add separate bedrooms and sweeping views. Room service is available 24/7.\n' +
      '\n' +
      'Amenities include a seafood restaurant offering open-air dining, along with a laid-back beach bar. Guests also have access to a pool at a nearby sister hotel.',
    remarks: ''
  }
];

const emptyAccommodationPkg: AccommodationPackage =  {
  id: 0,
  mealPlan: {
    id: 0,
    roomOnly: 0,
    bedAndBreakfast: 0,
    halfBoard: 0,
    fullBoard: 0,
    allInclusive: 0,
    remarks: '',
    accommodationPackageId: 0
  },
  roomPlan: {
    id: 0,
    singleRoom: 0,
    doubleRoom: 0,
    tripleRoom: 0,
    quadRoom: 0,
    family: 0,
    queen: 0,
    king: 0,
    twin: 0,
    suite: 0,
    remarks: '',
    accommodationPackageId: 0
  },
  childPlan: {
    id: 0,
    isChildPlanAvailable: false,
    cost: 0,
    remarks: '',
    accommodationPackageId: 0
  },
  guidePlan: {
    id: 0,
    isGuideRoomSupplied: false,
    guideRoom: 0,
    remarks: '',
    accommodationPackageId: 0
  },
  validPeriod: '',
  isLatestPackage: false,
  dateCreated: new Date(Date.now()),
  accommodationId: 0
};

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  accommodationData = ACCOMMODATION_DUMMY_DATA;
  selectedAccommodationData!: Accommodation | undefined;
  // selectedAccommodationPackageData!: AccommodationPackage | undefined;
  emptyAccommodationPackage: AccommodationPackage = emptyAccommodationPkg;

  constructor() {
  }

  /**
   * this method will send a get request to the backend and retrieve the Accommodation list
   * @returns Accommodation[]
   */
  getAccommodationList(): void { // Accommodation[]
  }

  getAccommodationDetails(id: number): Accommodation | undefined {
    console.log(id);
    this.selectedAccommodationData = this.accommodationData.find(value => value.id === id);
    // const result = this.accommodationData.find(value => value.id === id);
    // return (result) ? result : null;
    return (this.selectedAccommodationData) ? this.selectedAccommodationData : undefined;
  }

  // getAccommodationPackageDetails(accommodationId: number): AccommodationPackage[] | [] {
  //   const result = this.accommodationData.find(value => value.id === accommodationId);
  //   return (result) ? result.accommodationPackage : [];
  // }

  // getAccommodationPackage(id: number): void{
  //
  // }
}
