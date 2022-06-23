import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerpipe'
})
export class PowerpipePipe implements PipeTransform {

  transform(value: number): string {
    if(value > 0 && value <= 10){
      return "Weak";
    }
    else if(value >= 11 && value <= 20){
      return "Strong";
    }
    else if(value >= 21){
      return "OP";
    }
    else{
      return "This hero's power cannot be measured..."
    }
  }

}
