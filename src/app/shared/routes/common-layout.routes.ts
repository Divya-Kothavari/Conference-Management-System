import { Routes } from '@angular/router';


export const CommonLayout_ROUTES: Routes = [

    //Dashboard
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },

    //Apps
    {
        path: 'apps',
        data: {
            title: 'Apps'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../apps/apps.module').then(m => m.AppsModule)
            },
        ]    
    },

    //Component
    {
        path: 'components',
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../components/general/components-general.module').then(m => m.ComponentsGeneralModule)
            },
            {
                path: '',
                loadChildren: () => import('../../components/navigation/components-navigation.module').then(m => m.ComponentsNavigationModule)
            },
            {
                path: '',
                loadChildren: () => import('../../components/data-entry/components-data-entry.module').then(m => m.ComponentsDataEntryModule)
            },
            {
                path: '',
                loadChildren: () => import('../../components/data-display/components-data-display.module').then(m => m.ComponentsDataDisplayModule)
            },
            {
                path: '',
                loadChildren: () => import('../../components/feedback/components-feedback.module').then(m => m.ComponentsFeedbackModule)
            },
            {
                path: '',
                loadChildren: () => import('../../components/others/components-others.module').then(m => m.ComponentsOthersModule)
            }
        ],
        data: {
            title: 'Components '
        }
    },

    //Charts
    {
        path: 'charts',
        data: {
            title: 'Charts'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../charts/charts.module').then(m => m.ChartsModule)
            },
        ]    
    },

    //Pages
    {
        path: 'pages',
        data: {
            title: 'Pages '
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../pages/pages.module').then(m => m.PagesModule)
            },
        ]    
    },
    
    //Users

    {
        path: 'users',
        data: {
            title: 'Users '
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../users/users.module').then(m => m.UsersModule)
            },
        ]    
    },

    //Admin profile

    {
        path: 'adminprofile',
        data: {
            title: 'Admin Profile '
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../adminprofile/adminprofile.module').then(m => m.AdminProfileModule)
            },
        ]    
    }
];