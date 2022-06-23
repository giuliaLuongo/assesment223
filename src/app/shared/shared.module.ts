import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerConverterPipe } from './pipes/power-converter.pipe';



@NgModule({
  declarations: [


    PowerConverterPipe
  ],
  exports: [
    PowerConverterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
