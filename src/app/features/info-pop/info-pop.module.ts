import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {InfoPopComponent} from "./info-pop.component";
import {PowerPipeModule} from "../../shared/pipes/power-pipe/power-pipe.module";

const routes : Routes = [
  {path: '', component: InfoPopComponent}
]

@NgModule({
  declarations: [InfoPopComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PowerPipeModule
  ]
})
export class InfoPopModule { }
