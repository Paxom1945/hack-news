import { Pipe, PipeTransform } from '@angular/core';

// TODO: make it more generic
@Pipe({
  name: 'points',
})
export class PointsPipe implements PipeTransform {
  transform(value: number): string {
    return `${value} point${value !== 1 ? 's' : ''}`;
  }
}
