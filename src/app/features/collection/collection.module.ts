import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection.component';
import {RouterModule, Routes} from "@angular/router";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";

const routes : Routes = [
  {path : '', component: CollectionComponent}
]

@NgModule({
  declarations: [
    CollectionComponent
  ],
  exports: [
    CollectionComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatDialogModule
    ],
  providers : [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}]
})
export class CollectionModule { }
