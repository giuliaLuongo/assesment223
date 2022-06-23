import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopsComponent } from './pops.component';
import {RouterModule, Routes} from "@angular/router";
import {PipesModule} from "../../core/pipes/pipes.module";
import { DetailsComponent } from './details/details.component';
import {SharedModule} from "../../shared/shared.module";

const routes : Routes = [
  {path:'', component:PopsComponent},
  {path:'details/:id', component: DetailsComponent}
]

@NgModule({
  declarations: [
    PopsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PipesModule,
    SharedModule
  ]
})
export class PopsModule { }
