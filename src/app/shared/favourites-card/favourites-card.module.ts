import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesCardComponent } from './favourites-card.component';
import {PipesModule} from "../../core/pipes/pipes.module";



@NgModule({
    declarations: [
        FavouritesCardComponent
    ],
    exports: [
        FavouritesCardComponent
    ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class FavouritesCardModule { }
