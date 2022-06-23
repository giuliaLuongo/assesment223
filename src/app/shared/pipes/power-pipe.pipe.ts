import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerPipe'
})
export class PowerPipePipe implements PipeTransform {

  transform(value: number): string {
    if (value<10) return "debole"
    else if (value>10&&value<20) return "forte"
    else return "OP"
  }
}
