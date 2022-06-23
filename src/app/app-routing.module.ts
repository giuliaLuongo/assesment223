import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: 'pop-management' , loadChildren: () => import("./feature/pop-management/pop-management.module").then(m => m.PopManagementModule)},
  {path: 'favourites' , loadChildren: () => import("./feature/favourites/favourites.module").then(m => m.FavouritesModule)},
  {path: '**' , redirectTo: 'pop-management', pathMatch: 'full'},
  {path: '' , redirectTo: 'pop-management', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
