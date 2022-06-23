import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GestionePopsComponent} from "./gestione-pops.component";
import {RouterModule, Routes} from "@angular/router";
import {LevelPowerModule} from "../../core/pipes/level-power/level-power.module";

const routes : Routes = [
  {path:"", component: GestionePopsComponent}
]

@NgModule({
  declarations: [GestionePopsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LevelPowerModule

  ]
})
export class GestionePopsModule { }
