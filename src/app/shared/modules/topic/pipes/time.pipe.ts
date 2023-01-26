import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(dataOfCreating: number): string {
    const timeFromCreating = Math.round(Date.now() / 1000 - dataOfCreating);

    const timeRanges = [
        {seconds: 60, label: '0 minutes ago'},
        {seconds: 3599, label: `${Math.round(timeFromCreating / 60)} minutes ago`},
        {seconds: 7199, label: '1 hour ago'},
        {seconds: 86399, label: `${Math.round(timeFromCreating / 3600)} hours ago`},
        {seconds: 172799, label: '1 day ago'},
        {seconds: 31535999, label: `${Math.round(timeFromCreating / 86400)} days ago`}
    ];
    
    for (const { seconds, label } of timeRanges) {
      if (timeFromCreating <= seconds) {
        return label;
      }
    }
    return 'more than a year ago';
  }
}
