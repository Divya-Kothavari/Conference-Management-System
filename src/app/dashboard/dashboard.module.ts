import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { NgChartjsModule } from 'ng-chartjs';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ThemeConstantService } from '../shared/services/theme-constant.service';

import { DefaultDashboardComponent } from './default/default-dashboard.component';
import { EcommerceDashboardComponent } from './e-commerce/e-commerce-dashboard.component';
import { ProjectsDashboardComponent } from './projects/projects-dashboard.component';
import { CrmDashboardComponent } from './crm/crm-dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        DashboardRoutingModule,
        NgChartjsModule
    ],
    exports: [],
    declarations: [
        DefaultDashboardComponent,
        EcommerceDashboardComponent,
        ProjectsDashboardComponent,
        CrmDashboardComponent
    ],
    providers: [
        ThemeConstantService
    ],
})
export class DashboardModule { }
