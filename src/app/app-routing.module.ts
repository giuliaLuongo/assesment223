import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home", loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)},
  {path:"detailsPop", loadChildren: () => import("./features/details-pop/details-pop.module").then(m => m.DetailsPopModule)},
  {path:"gestionePops", loadChildren: () => import("./features/gestione-pops/gestione-pops.module").then(m => m.GestionePopsModule)},
  {path:"preferedList", loadChildren: () => import("./features/prefered-list/prefered-list.module").then(m => m.PreferedListModule)},
  {path:"**", redirectTo:"home",pathMatch:"full"},
  {path:"", redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
