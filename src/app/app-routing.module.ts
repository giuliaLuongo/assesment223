import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: ()=> import('./features/home/home.module').then(m => m.HomeModule)},
  {path: 'collection', loadChildren: () => import('./features/collection/collection.module').then(m => m.CollectionModule)},
  {path: 'favorites', loadChildren: () => import('./features/favorites/favorites.module').then(m => m.FavoritesModule)},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
