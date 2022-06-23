import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)},
  {path: 'pops', loadChildren: () => import('./features/pops/pops.module').then(m => m.PopsModule)},
  {path: 'favourites', loadChildren: () => import('./features/favourites/favourites.module').then(m => m.FavouritesModule)},
  {path: '**' , redirectTo: 'home', pathMatch: 'full'},
  {path: '' , redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
