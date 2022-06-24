import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopComponent } from './pop.component';
import {RouterModule, Routes} from "@angular/router";
import {PipesModule} from "../../core/pipes/pipes.module";

const routes : Routes = [
  {path: '', component: PopComponent}
]

@NgModule({
  declarations: [
    PopComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        PipesModule
    ],
  exports: [
    PopComponent,
  ]
})
export class PopModule { }
