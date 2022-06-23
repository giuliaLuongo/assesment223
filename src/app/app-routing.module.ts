import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "home", loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)},
  {path: "popMarvel", loadChildren: () => import("./shared/table-marvel/table-marvel.module").then(m => m.TableMarvelModule)},
  {path: "card-marvel", loadChildren: () => import("./shared/card-marvel/card-marvel.module").then(m => m.CardMarvelModule)},
  {path: "**", redirectTo: "home", pathMatch: "full"},
  {path: "", redirectTo: "home", pathMatch: "full"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
