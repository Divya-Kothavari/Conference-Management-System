import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartistComponent } from './chartist/chartist.component';

const routes: Routes = [
    {
        path: 'chartjs',
        component: ChartjsComponent,
        data: {
            title: 'Chart Js'
        }
    },
    {
        path: 'chartist',
        component: ChartistComponent,
        data: {
            title: 'Chartist'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChartsRoutingModule { }
