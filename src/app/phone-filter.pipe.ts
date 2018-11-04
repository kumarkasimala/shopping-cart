import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFilter'
})
export class PhoneFilterPipe implements PipeTransform {

  transform(phones: any, searchPhone: any): any {
    if(searchPhone === undefined) return phones;
    else {
      return phones.filter(function(phone) {
        return phone.name.toLowerCase().includes(searchPhone.toLowerCase());
      });
    }
  }
}
