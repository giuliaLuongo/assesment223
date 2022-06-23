import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from "./core/header/header.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterModule} from "./core/footer/footer.module";
import {HttpClientModule} from "@angular/common/http";
import {PowerPipeModule} from "./shared/pipes/power-pipe/power-pipe.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HeaderModule,
        BrowserAnimationsModule,
        FooterModule,
        PowerPipeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
