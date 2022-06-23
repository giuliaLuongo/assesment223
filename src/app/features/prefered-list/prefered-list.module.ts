import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GestionePopsComponent} from "../gestione-pops/gestione-pops.component";
import {PreferedListComponent} from "./prefered-list.component";
import {CardModule} from "../../shared/card/card.module";

const routes : Routes = [
  {path:"", component: PreferedListComponent}
]


@NgModule({
  declarations: [PreferedListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule
  ]
})
export class PreferedListModule { }
