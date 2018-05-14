import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})

@Injectable()
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered Injectable, out
        return items.filter(item => item.code_group.indexOf(filter["code_group"]) !== -1);
    }
}