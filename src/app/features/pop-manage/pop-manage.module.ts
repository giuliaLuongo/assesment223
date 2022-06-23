import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopManageComponent} from "./pop-manage.component";
import {Route, RouterModule} from "@angular/router";
import {PipesModule} from "../../core/pipes/pipes.module";

const routes : Route[] = [
  {path:'', component:PopManageComponent}
]

@NgModule({
  declarations: [
    PopManageComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        PipesModule
    ],
  exports:[
    PopManageComponent
  ]
})
export class PopManageModule { }
