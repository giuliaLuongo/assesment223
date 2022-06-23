import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import {RouterModule} from "@angular/router";
import {LevelPowerModule} from "../../core/pipes/level-power/level-power.module";



@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        LevelPowerModule
    ]
})
export class CardModule { }
