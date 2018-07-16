import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelToTitleCase'
})
export class CamelToTitleCasePipe implements PipeTransform {

  transform(value: string): string {
    return value
    // insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, str => str.toUpperCase());
  }

}
