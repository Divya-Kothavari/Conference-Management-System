import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ComponentsOthersRoutingModule } from './components-others-routing.module'

import { AnchorComponent } from './anchor/anchor.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { DividerComponent } from './divider/divider.component';

@NgModule({
    imports: [
        SharedModule,
        ComponentsOthersRoutingModule
    ],
    exports: [],
    declarations: [
        AnchorComponent,
        BackToTopComponent,
        DividerComponent
    ],
    providers: [],
})

export class ComponentsOthersModule { }
