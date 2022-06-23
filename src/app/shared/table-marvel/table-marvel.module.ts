import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableMarvelComponent } from './table-marvel.component';
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
  {path:'', component: TableMarvelComponent}
]

@NgModule({
  declarations: [
    TableMarvelComponent
  ],
  exports: [
    TableMarvelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TableMarvelModule { }
