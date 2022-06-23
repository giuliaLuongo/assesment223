import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
  {path: "home", loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)},
  {path: "pop-management", loadChildren: () => import("./features/pop-management/pop-management.module").then(m => m.PopManagementModule)},
  {path: "pop-details/:id", loadChildren: () => import("./features/pop-details/pop-details.module").then(m => m.PopDetailsModule)},
  {path: "favourites", loadChildren: () => import("./features/favourites/favourites.module").then(m => m.FavouritesModule)},
  {path: "**", redirectTo: "home", pathMatch: "full"},
  {path: "", redirectTo: "home", pathMatch: "full"}
]


@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
