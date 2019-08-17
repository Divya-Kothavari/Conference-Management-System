import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffixComponent } from './affix/affix.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { dropdownComponent } from './dropdown/dropdown.component';
import { menuComponent } from './menu/menu.component';
import { pageHeaderComponent } from './page-header/page-header.component';
import { paginationComponent } from './pagination/pagination.component';
import { stepsComponent } from './steps/steps.component';

const routes: Routes = [
    {
        path: 'navigation',
        data: {
            title: 'Navigation'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: 'affix',
                component: AffixComponent,
                data: {
                    title: 'Affix'
                }
            },
            {
                path: 'breadcrumb',
                component: BreadcrumbComponent,
                data: {
                    title: 'Breadcrumb'
                }
            },
            {
                path: 'dropdown',
                component: dropdownComponent,
                data: {
                    title: 'Dropdown'
                }
            },
            {
                path: 'menu',
                component: menuComponent,
                data: {
                    title: 'Menu'
                }
            },
            {
                path: 'page-header',
                component: pageHeaderComponent,
                data: {
                    title: 'Page Header'
                }
            },
            {
                path: 'pagination',
                component: paginationComponent,
                data: {
                    title: 'Pagination'
                }
            },
            {
                path: 'steps',
                component: stepsComponent,
                data: {
                    title: 'Steps'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ComponentsNavigationRoutingModule { }
