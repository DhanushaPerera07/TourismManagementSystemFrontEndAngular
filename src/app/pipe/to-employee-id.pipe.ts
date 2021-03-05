import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toEmployeeId'
})
export class ToEmployeeIdPipe implements PipeTransform {

  transform(value: number): string {
    if (/\d{1}/.test(value.toString())) {
      return `E00000${value}`;
    } else if (/\d{2}/.test(value.toString())) {
      return `E0000${value}`;
    } else if (/\d{3}/.test(value.toString())) {
      return `E000${value}`;
    } else if (/\d{4}/.test(value.toString())) {
      return `E00${value}`;
    } else if (/\d{5}/.test(value.toString())) {
      return `E0${value}`;
    } else if (/\d{6}/.test(value.toString())) {
      return `E${value}`;
    } else {
      return 'E00000';
    }
  }

}
