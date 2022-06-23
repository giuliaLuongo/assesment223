import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
  const routes :Route[] = [
  {path:'home', loadChildren: () =>import('./features/home/home.module').then(m=>m.HomeModule)},
  {path:'pop', loadChildren: () =>import('./features/pop-manage/pop-manage.module').then(m=>m.PopManageModule)},
  {path:'favourites', loadChildren: () =>import('./features/favourite/favourite.module').then(m=>m.FavouriteModule)},
  {path:'info/:id', loadChildren: () =>import('./features/pop-info/pop-info.module').then(m=>m.PopInfoModule)},
  {path:'**', redirectTo:'home', pathMatch:'full'},
  {path:'', redirectTo:'home', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
