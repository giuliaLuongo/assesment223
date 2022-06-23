import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from "./core/layout/header/header.module";
import {CollectionModule} from "./features/collection/collection.module";
import {HttpClientModule} from "@angular/common/http";
import {FavoritesModule} from "./features/favorites/favorites.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {FooterModule} from "./core/layout/footer/footer.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    AppRoutingModule,
    HeaderModule,
    CollectionModule,
    FavoritesModule,
    BrowserAnimationsModule,
    FooterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
