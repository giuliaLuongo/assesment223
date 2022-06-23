import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'manage-pop' ,loadChildren: () => import("./features/manage-pop/manage-pop.module").then(m => m.ManagePopModule)},
  {path: 'favourites' , loadChildren: () => import("./features/favourites/favourites.module").then(m => m.FavouritesModule)},
  {path: 'info-pop/:id' , loadChildren: () => import("./features/info-pop/info-pop.module").then(m => m.InfoPopModule)},
  {path: '**' , redirectTo: 'manage-pop', pathMatch: 'full'},
  {path: '' , redirectTo: 'manage-pop', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
