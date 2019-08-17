import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ChartsRoutingModule } from './charts-routing.module';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NgChartjsModule } from 'ng-chartjs';
import { ChartistModule } from 'ng-chartist';

import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartistComponent } from './chartist/chartist.component'

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ChartsRoutingModule,
        NgChartjsModule,
        ChartistModule
    ],
    declarations: [
        ChartjsComponent,
        ChartistComponent
    ],
    providers: [
        ThemeConstantService
    ]
})

export class ChartsModule {}