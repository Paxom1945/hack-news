import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'link',
})
export class LinkPipe implements PipeTransform {
  transform(url: string): string {
    const match = url.match(
      /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/
    );
    return match ? match[1] : url;
  }
}
