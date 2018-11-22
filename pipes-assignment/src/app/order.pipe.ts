import { Pipe, PipeTransform } from '@angular/core';
import { AppServer } from './model/AppServer';

@Pipe({
    name: 'orders',
    pure: false
})
export class OrdersPipe  implements PipeTransform {
    transform(array: AppServer[], field: string): any[] {
      array.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
          return -1;
        } else if (a[field] > b[field]) {
          return 1;
        } else {
          return 0;
        }
      });
      return array;
    }
  }
