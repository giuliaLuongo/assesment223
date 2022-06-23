import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMarvelComponent } from './card-marvel.component';
import {RouterModule, Routes} from "@angular/router";


const routes : Routes = [
  {path:'', component: CardMarvelComponent}
]
@NgModule({
  declarations: [
    CardMarvelComponent
  ],
  exports: [
    CardMarvelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CardMarvelModule { }
