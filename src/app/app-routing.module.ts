import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: ()=> import('./features/home/home.module').then(m => m.HomeModule)},
  {path: 'pop', loadChildren: ()=> import('./features/pop/pop.module').then(m => m.PopModule)},
  {path: 'favourite', loadChildren: ()=> import('./features/favourite/favourite.module').then(m => m.FavouriteModule)},
  {path: 'info/:id', loadChildren: ()=> import('./features/info-pop/info-pop.module').then(m => m.InfoPopModule)},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
