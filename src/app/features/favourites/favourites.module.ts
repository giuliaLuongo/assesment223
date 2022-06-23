import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites.component';
import {RouterModule, Routes} from "@angular/router";
import {PipesModule} from "../../core/pipes/pipes.module";

const routes : Routes = [
  {path: '', component: FavouritesComponent}
]

@NgModule({
  declarations: [
    FavouritesComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        PipesModule
    ]
})
export class FavouritesModule { }
