import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number): string {
    if (value <= 10){
      return "Debole";
    } else if (value >= 10 && value < 20){
      return "Forte";
    } else (value >= 20)
      return "OP";
  }
}
