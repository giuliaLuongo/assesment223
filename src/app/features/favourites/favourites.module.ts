import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites.component';
import {RouterModule, Routes} from "@angular/router";
import {PopCardsModule} from "../../shared/pop-cards/pop-cards.module";

const routes : Routes = [
  {path: "", component: FavouritesComponent}
]

@NgModule({
  declarations: [
    FavouritesComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        PopCardsModule
    ]
})
export class FavouritesModule { }
