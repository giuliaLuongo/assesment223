import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites.component';
import {RouterModule, Routes} from "@angular/router";
import {FavouritesCardModule} from "../../shared/favourites-card/favourites-card.module";

const routes :Routes = [
  {path: "", component: FavouritesComponent}
]

@NgModule({
  declarations: [
    FavouritesComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FavouritesCardModule
    ]
})
export class FavouritesModule { }
