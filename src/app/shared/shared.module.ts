import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from "./card/card.component";
import {PipesModule} from "../core/pipes/pipes.module";


@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports:[
    CardComponent,
  ]
})
export class SharedModule { }
