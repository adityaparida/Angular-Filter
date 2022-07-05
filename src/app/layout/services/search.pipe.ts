import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lists: any[], keyword: string): any {
    if (Array.isArray(lists) && typeof keyword === 'string') {
      return lists.filter(list => {
        return Object.keys(list).some(key => {
          if (typeof list[key] == 'string') {
            return list[key].toLowerCase().includes(keyword.toLowerCase());
          }
          return false;
        })
      })
    }
    return lists;
  }
}