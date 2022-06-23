import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopComponent } from './pop.component';
import {RouterModule, Routes} from "@angular/router";
import {PowerPipeModule} from "../../shared/pipes/power-pipe/power-pipe.module";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";


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
        PowerPipeModule,
        MatDialogModule
    ],
  exports: [
    PopComponent
  ]
})
export class PopModule { }
