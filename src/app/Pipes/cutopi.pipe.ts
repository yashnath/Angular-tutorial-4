import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutopi'
})
export class CutopiPipe implements PipeTransform {

  transform(value: number, ...args: any): unknown {
    let x= args;debugger;
    return value/x;
  }

}
