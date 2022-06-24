import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerPipe } from './power.pipe';



@NgModule({
    declarations: [
        PowerPipe
    ],
    exports: [
        PowerPipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipesModule { }
