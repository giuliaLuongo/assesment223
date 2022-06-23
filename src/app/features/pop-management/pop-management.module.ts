import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopManagementComponent } from './pop-management.component';
import {RouterModule, Routes} from "@angular/router";
import {PipesModule} from "../../core/pipes/pipes.module";

const routes : Routes = [
  {path: "", component: PopManagementComponent}
]

@NgModule({
  declarations: [
    PopManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PipesModule
  ]
})
export class PopManagementModule { }
