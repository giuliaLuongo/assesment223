import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagePopComponent } from './manage-pop.component';
import {RouterModule, Routes} from "@angular/router";
import {PipesModule} from "../../shared/pipes/pipes.module";
import {AppRoutingModule} from "../../app-routing.module";

const routes : Routes = [
  {path: '', component: ManagePopComponent},
]


@NgModule({
  declarations: [
    ManagePopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PipesModule

  ]
})
export class ManagePopModule { }
