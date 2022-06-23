import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites.component';
import {RouterModule, Routes} from "@angular/router";


const routes : Routes = [
  {path: '', component: FavouritesComponent},
]

@NgModule({
  declarations: [
    FavouritesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule
  ],
  exports: [
    FavouritesComponent
  ]
})
export class FavouritesModule { }
