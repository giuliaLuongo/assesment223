import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopCardsComponent } from './pop-cards.component';
import {PipesModule} from "../../core/pipes/pipes.module";



@NgModule({
    declarations: [
        PopCardsComponent
    ],
    exports: [
        PopCardsComponent
    ],
    imports: [
        CommonModule,
        PipesModule
    ]
})
export class PopCardsModule { }
