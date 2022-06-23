import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from "./core/header/header.module";
import {HttpClientModule} from "@angular/common/http";
import {FooterModule} from "./core/footer/footer.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        HeaderModule,
        FooterModule
    ],
    providers: [],

    bootstrap: [AppComponent]
})
export class AppModule { }
