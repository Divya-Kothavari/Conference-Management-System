import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertComponent } from './alert/alert.component';
import { DrawerComponent } from './drawer/drawer.component';
import { MessageComponent } from './message/message.component';
import { ModalComponent } from './modal/modal.component';
import { NotificationComponent } from './notification/notification.component';
import { PopconfirmComponent } from './popconfirm/popconfirm.component';
import { ProgressComponent } from './progress/progress.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SpinComponent } from './spin/spin.component';

const routes: Routes = [
    {
        path: 'feedback',
        data: {
            title: 'Feedback'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: 'alert',
                component: AlertComponent,
                data: {
                    title: 'Alert'
                }
            },
            {
                path: 'drawer',
                component: DrawerComponent,
                data: {
                    title: 'Drawer'
                }
            },
            {
                path: 'message',
                component: MessageComponent,
                data: {
                    title: 'Message'
                }
            },
            {
                path: 'modal',
                component: ModalComponent,
                data: {
                    title: 'Modal'
                }
            },
            {
                path: 'notification',
                component: NotificationComponent,
                data: {
                    title: 'Notification'
                }
            },
            {
                path: 'popconfirm',
                component: PopconfirmComponent,
                data: {
                    title: 'Popconfirm'
                }
            },
            {
                path: 'progress',
                component: ProgressComponent,
                data: {
                    title: 'Progress'
                }
            },
            {
                path: 'skeleton',
                component: SkeletonComponent,
                data: {
                    title: 'Skeleton'
                }
            },
            {
                path: 'spin',
                component: SpinComponent,
                data: {
                    title: 'Spin'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ComponentsFeedbackRoutingModule { }
