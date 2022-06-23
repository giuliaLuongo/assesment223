import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

const routes : Route[] = [
  {path:'', component: FavouritesComponent}
]

@NgModule({
  declarations: [
    FavouritesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule
  ],
  exports: [
    FavouritesComponent
  ]
})
export class FavouritesModule { }
