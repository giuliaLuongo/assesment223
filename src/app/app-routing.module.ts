import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './features/management/detail/detail.component';

const routes: Routes = [
  {path:'management', loadChildren: () => import('./features/management/management.module').then(m => m.ManagementModule)},
  {path:'favourites', loadChildren: () => import('./features/favourites/favourites.module').then(m => m.FavouritesModule)},
  {path:'**', redirectTo:'management', pathMatch:'full'},
  {path:'', redirectTo:'management', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
