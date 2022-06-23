import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailComponent } from './detail/detail.component';

const routes : Route[] = [
  {path:'', component: ManagementComponent},
  {path:'details/:id', component: DetailComponent}
]

@NgModule({
  declarations: [
    ManagementComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [
    ManagementComponent,
    DetailComponent
  ]
})
export class ManagementModule { }
