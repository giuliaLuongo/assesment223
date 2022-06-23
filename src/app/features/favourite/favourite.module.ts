import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteComponent } from './favourite.component';
import {RouterModule, Routes} from "@angular/router";
import {PowerPipeModule} from "../../shared/pipes/power-pipe/power-pipe.module";
import {SharedModule} from "../../shared/shared.module";

const routes : Routes = [
  {path: '', component: FavouriteComponent}
]

@NgModule({
  declarations: [
    FavouriteComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        PowerPipeModule,
        SharedModule
    ],
  exports: [
    FavouriteComponent
  ]
})
export class FavouriteModule { }
