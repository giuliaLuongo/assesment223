import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'levelPower'
})
export class LevelPowerPipe implements PipeTransform {

  transform(value: number): string {
    if(value < 10)
      return "Weak"
    else if (value >=20)
      return "OP"

    return "Strong"

  }

}
