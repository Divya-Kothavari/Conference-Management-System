import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../../shared/shared.module';
import { HighlightModule } from 'ngx-highlightjs';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ComponentsFeedbackRoutingModule } from "./components-feedback-routing.module";

import { AlertComponent } from './alert/alert.component';
import { DrawerComponent } from './drawer/drawer.component';
import { NzDrawerCustomComponent } from './drawer/drawer.component';
import { MessageComponent } from './message/message.component';
import { ModalComponent } from './modal/modal.component';
import { NzModalCustomComponent } from './modal/modal.component';
import { NotificationComponent } from './notification/notification.component';
import { PopconfirmComponent } from './popconfirm/popconfirm.component';
import { ProgressComponent } from './progress/progress.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SpinComponent } from './spin/spin.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HighlightModule,
        ComponentsFeedbackRoutingModule,
        InfiniteScrollModule
    ],
    exports: [],
    declarations: [
        AlertComponent,
        DrawerComponent,
        NzDrawerCustomComponent,
        MessageComponent,
        ModalComponent,
        NzModalCustomComponent,
        NotificationComponent,
        PopconfirmComponent,
        ProgressComponent,
        SkeletonComponent,
        SpinComponent
    ],
    entryComponents: [ NzDrawerCustomComponent, NzModalCustomComponent ],
    providers: [],
})

export class ComponentsFeedbackModule { }
