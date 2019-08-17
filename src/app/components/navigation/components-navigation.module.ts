import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../shared/shared.module';
import { HighlightModule } from 'ngx-highlightjs';

import { ComponentsNavigationRoutingModule } from "./components-navigation-rounting.module";

import { AffixComponent } from './affix/affix.component'
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component'
import { dropdownComponent } from './dropdown/dropdown.component'
import { menuComponent } from './menu/menu.component'
import { pageHeaderComponent } from './page-header/page-header.component';
import { paginationComponent } from './pagination/pagination.component';
import { stepsComponent } from './steps/steps.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HighlightModule,
        ComponentsNavigationRoutingModule
    ],
    exports: [],
    declarations: [
        AffixComponent,
        BreadcrumbComponent,
        dropdownComponent,
        menuComponent,
        pageHeaderComponent,
        paginationComponent,
        stepsComponent
    ],
    providers: [],
})
export class ComponentsNavigationModule { }
