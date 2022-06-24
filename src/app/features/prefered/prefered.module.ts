import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferedComponent } from './prefered.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

const routes : Routes = [
  {path: '', component: PreferedComponent}
]

@NgModule({
  declarations: [
    PreferedComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
  exports : [
    PreferedComponent,
  ]
})
export class PreferedModule { }
