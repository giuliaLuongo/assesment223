import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopManagementComponent } from './pop-management.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

const routes : Routes = [
  {path: '', component: PopManagementComponent},
  ]


@NgModule({
  declarations: [
    PopManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    SharedModule
  ],
  exports: [
    PopManagementComponent
  ]
})
export class PopManagementModule { }
