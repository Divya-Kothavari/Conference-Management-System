import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnchorComponent } from './anchor/anchor.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { DividerComponent } from './divider/divider.component';

const routes: Routes = [
    {
        path: 'others',
        data: {
            title: 'Others'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: 'anchor',
                component: AnchorComponent,
                data: {
                    title: 'Anchor'
                }
            },
            {
                path: 'back-to-top',
                component: BackToTopComponent,
                data: {
                    title: 'Back To Top'
                }
            },
            {
                path: 'divider',
                component: DividerComponent,
                data: {
                    title: 'Divider'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ComponentsOthersRoutingModule { }
