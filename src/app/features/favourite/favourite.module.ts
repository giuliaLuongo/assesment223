import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FavouriteComponent} from "./favourite.component";
import {Route, RouterModule} from "@angular/router";
import {PipesModule} from "../../core/pipes/pipes.module";
import {SharedModule} from "../../shared/shared.module";

const routes : Route[] = [
  {path:'', component:FavouriteComponent}
]

@NgModule({
  declarations: [
    FavouriteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PipesModule,
    SharedModule
  ],
  exports:[
    FavouriteComponent
  ]
})
export class FavouriteModule { }
