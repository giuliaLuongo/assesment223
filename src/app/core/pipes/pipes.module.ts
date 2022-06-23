import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerRatingPipe } from './power-rating/power-rating.pipe';



@NgModule({
  declarations: [
    PowerRatingPipe
  ],
  exports: [
    PowerRatingPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
