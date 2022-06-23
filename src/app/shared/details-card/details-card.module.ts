import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsCardComponent} from "./details-card.component";
import {PipesModule} from "../../core/pipes/pipes.module";



@NgModule({
  declarations: [
    DetailsCardComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    DetailsCardComponent
  ]
})
export class DetailsCardModule { }
