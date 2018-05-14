import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CodeFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'codeFilter'
})
export class CodeFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], filter:any[]) {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered Injectable, out
    return items.filter(item => item.code_group.indexOf(filter["code_group"]) > -1);
  }
}
