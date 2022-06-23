import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number): string {
    if(value>0 && value<10){
      return "Weak";
    } else if(value>=10 && value<20){
      return "Strong";
    } else {
      return "OP";
    } 
  }

}
