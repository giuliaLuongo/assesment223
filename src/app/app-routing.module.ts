import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home", loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)},
  {path:"management", loadChildren: () => import("./features/pop-management/pop-management.module").then(m => m.PopManagementModule)},
  {path:"favourites", loadChildren: () => import("./features/favourites/favourites.module").then(m => m.FavouritesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
