import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component'
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { AntGridComponent } from './ant-grid/ant-grid.component';

const routes: Routes = [
    {
        path: 'general',
        data: {
            title: 'General'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: 'ant-grid',
                component: AntGridComponent,
                data: {
                    title: 'Ant Grid'
                }
            },
            {
                path: 'buttons',
                component: ButtonsComponent,
                data: {
                    title: 'Buttons'
                }
            },
            {
                path: 'icons',
                component: IconsComponent,
                data: {
                    title: 'Icons'
                }
            },
            {
                path: 'typography',
                component: TypographyComponent,
                data: {
                    title: 'Typography'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ComponentsGeneralRoutingModule { }
