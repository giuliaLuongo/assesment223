import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPopComponent } from './info-pop.component';
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
  {path: '', component: InfoPopComponent},
]

@NgModule({
  declarations: [
    InfoPopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InfoPopModule { }
