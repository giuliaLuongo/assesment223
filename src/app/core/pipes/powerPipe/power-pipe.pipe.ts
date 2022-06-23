import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerPipe'
})
export class PowerPipePipe implements PipeTransform {

  transform(value : number): string {
    if(value <= 10) {
      return "Weak"
    }
    else if(value > 10 && value <= 20) {
      return "Strong"
    }
    else{
      return "OP"
    }
  }

}
