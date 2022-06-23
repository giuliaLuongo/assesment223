import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LevelPowerPipe} from "./level-power.pipe";



@NgModule({
  declarations: [LevelPowerPipe],
  imports: [
    CommonModule
  ],
  exports:[
    LevelPowerPipe
  ]
})
export class LevelPowerModule { }
