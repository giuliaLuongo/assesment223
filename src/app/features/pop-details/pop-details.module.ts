import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopDetailsComponent } from './pop-details.component';
import {RouterModule, Routes} from "@angular/router";
import {PipesModule} from "../../core/pipes/pipes.module";

const routes : Routes = [
  {path: "",  component: PopDetailsComponent}
]

@NgModule({
  declarations: [
    PopDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PipesModule
  ]
})
export class PopDetailsModule { }
