import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NzLayoutModule, NzAvatarModule, NzDropDownModule, NzBreadCrumbModule, NzIconModule, NzGridModule  } from 'ng-zorro-antd';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    NzLayoutModule,
    NzAvatarModule,
    NzDropDownModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzIconModule,
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
