import {Pipe, PipeTransform} from '@angular/core';
import parsePhoneNumber from 'libphonenumber-js';

@Pipe({
  name: 'formatPhoneNumber'
})
export class FormatPhoneNumberPipe implements PipeTransform {

  transform(inputPhoneNumber: string, countryCallingCode: any): string {
    const phoneNumber = parsePhoneNumber(inputPhoneNumber, countryCallingCode);
    return (phoneNumber) ? phoneNumber?.formatInternational() : inputPhoneNumber;
  }

}
