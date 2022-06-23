import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopInfoComponent} from "./pop-info.component";
import { Route, RouterModule} from "@angular/router";
import {PipesModule} from "../../core/pipes/pipes.module";
import {SharedModule} from "../../shared/shared.module";


const routes : Route[] = [
  {path:'', component:PopInfoComponent}
]

@NgModule({
  declarations: [
    PopInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PipesModule,
    SharedModule,
  ],
  exports:[
    PopInfoComponent
  ]
})
export class PopInfoModule { }
