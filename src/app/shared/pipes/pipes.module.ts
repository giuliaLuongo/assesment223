import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerPipePipe } from './power-pipe.pipe';



@NgModule({
  declarations: [

    PowerPipePipe
  ],
  exports: [
    PowerPipePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
