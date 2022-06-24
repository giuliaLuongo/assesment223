import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)},
  {path: 'pop', loadChildren: () => import('./features/pop/pop.module').then(m => m.PopModule)},
  {path: 'prefered', loadChildren: () => import('./features/prefered/prefered.module').then(m => m.PreferedModule)},
  {path: '**' , redirectTo: 'home', pathMatch: 'full'},
  {path: '' , redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
