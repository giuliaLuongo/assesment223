import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites.component';
import {RouterModule, Routes} from "@angular/router";
import {ManagePopComponent} from "../manage-pop/manage-pop.component";
import {SharedModule} from "../../shared/shared.module";

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
        SharedModule
    ]
})
export class FavouritesModule { }
