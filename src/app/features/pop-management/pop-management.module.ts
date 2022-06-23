import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PopManagementComponent} from "./pop-management.component";
import {PipesModule} from "../../core/pipes/pipes.module";
import { DetailsComponent } from './details/details.component';
import {AppModule} from "../../app.module";
import {DetailsCardModule} from "../../shared/details-card/details-card.module";

const routes : Routes =[
  {path: "", component: PopManagementComponent},
  {path: "details/:id", component: DetailsComponent}
]

@NgModule({
  declarations: [
    PopManagementComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PipesModule,
    DetailsCardModule
  ]
})
export class PopManagementModule { }
