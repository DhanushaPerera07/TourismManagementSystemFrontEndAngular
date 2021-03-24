import {Injectable} from '@angular/core';
import {Accommodation} from '../../interface/accommodation';
import {StarRatingEnum} from '../../enum/star-rating.enum';

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
    accommodationPackage: [],
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

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  accommodationData = ACCOMMODATION_DUMMY_DATA;
  // selectedAccommodationData: Accommodation = ACCOMMODATION_DUMMY_DATA[0];

  constructor() {
  }

  /**
   * this method will send a get request to the backend and retrieve the Accommodation list
   * @returns Accommodation[]
   */
  getAccommodationList(): void { // Accommodation[]
  }

  getAccommodationDetails(id: number): Accommodation | null{
    console.log(id);
    const result = this.accommodationData.find(value => value.id === id);
    return (result) ? result : null;
  }
}
