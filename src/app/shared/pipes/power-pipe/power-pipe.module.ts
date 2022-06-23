import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PowerPipePipe} from "./power-pipe.pipe";



@NgModule({
  declarations: [
    PowerPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PowerPipePipe
  ]
})
export class PowerPipeModule { }
