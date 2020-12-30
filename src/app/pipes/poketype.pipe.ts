import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poketype'
})
export class PoketypePipe implements PipeTransform {

  transform(value:string): unknown {
    return ", " + value;
  }

}
