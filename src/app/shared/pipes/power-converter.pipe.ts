import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerConverter'
})
export class PowerConverterPipe implements PipeTransform {

  transform(value: number): string {
    if(value >=0 && value <10){
      return ' weak'
    }
    if(value >=10 && value <=20){
      return ' strong'
    }
    if(value > 20){
      return ' OP'
    }
    else{
      return 'who the hell is this guy?'
    }
  }

}
