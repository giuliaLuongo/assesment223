import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteCardComponent } from './favourite-card/favourite-card.component';
import { PowerPipe } from './pipes/powerPipe/power.pipe';



@NgModule({
  declarations: [
    FavouriteCardComponent,
    PowerPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FavouriteCardComponent,
    PowerPipe
  ]
})
export class SharedModule { }
