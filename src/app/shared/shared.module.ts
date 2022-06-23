import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopCardComponent } from './pop-card/pop-card.component';
import {PowerPipeModule} from "./pipes/power-pipe/power-pipe.module";



@NgModule({
  declarations: [
    PopCardComponent
  ],
  imports: [
    CommonModule,
    PowerPipeModule
  ],
  exports: [
    PopCardComponent
  ]
})
export class SharedModule { }
