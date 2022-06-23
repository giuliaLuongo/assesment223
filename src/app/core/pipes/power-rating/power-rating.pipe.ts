import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerRating'
})
export class PowerRatingPipe implements PipeTransform {

  transform(value: number): string {
   if (value < 10){
     return "Weak"
   }
    else if (value > 10 && value < 20){
      return "Strong"
    }
    else if (value > 20){
      return "OP"
    }
    else{
      return "Unknown rating"
   }
  }

}
