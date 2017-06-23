import {Pipe, PipeTransform, Injectable} from "@angular/core";

@Pipe({name: 'filter'})

@Injectable()
export class FilterPipe  implements PipeTransform {
  transform(value, filters) {
return value;
    // let filter = function(obj, filters) {
    //   return Object.keys(filters).every(prop => obj[prop] === filters[prop])
    // }
    //
    // return value.filter(obj => filter(obj, filters[0]));
  }
}
