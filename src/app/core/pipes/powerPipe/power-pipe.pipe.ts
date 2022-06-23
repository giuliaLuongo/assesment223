import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerPipe'
})
export class PowerPipePipe implements PipeTransform {

  transform(power: number): string {
    if(power < 10){
      return "Debole";
    }else if(power >= 10 && power < 20){
      return "Forte";
    }else{
      return "OP";
    }
  }

}
