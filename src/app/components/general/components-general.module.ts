import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../shared/shared.module';

import { ComponentsGeneralRoutingModule } from "./components-general-rounting.module";

import { AntGridComponent } from './ant-grid/ant-grid.component';
import { ButtonsComponent } from "./buttons/buttons.component";
import { IconsComponent } from './icons/icons.component';
import { IconFilterPipe } from 'src/app/shared/pipes/iconFilter.pipe';
import { TypographyComponent } from './typography/typography.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ComponentsGeneralRoutingModule
    ],
    exports: [],
    declarations: [
        AntGridComponent,
        ButtonsComponent,
        IconsComponent,
        IconFilterPipe,
        TypographyComponent
    ],
    providers: [
        IconFilterPipe
    ],
})
export class ComponentsGeneralModule { }
