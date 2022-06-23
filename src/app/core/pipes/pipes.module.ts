import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PowerpipePipe} from "./powerpipe.pipe";



@NgModule({
  declarations: [PowerpipePipe],
  imports: [
    CommonModule
  ],
  exports:[PowerpipePipe]
})
export class PipesModule { }
