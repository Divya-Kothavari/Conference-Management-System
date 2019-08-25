import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';


export const CommonLayout_ROUTES: Routes = [

    //Dashboard
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    
    //Users

    {
        path: 'users',
        canActivate: [AuthGuard],
        data: {
            title: 'Users '
        },
        loadChildren: () => import('../../users/users.module').then(m => m.UsersModule)  
    },
    

    //Admin profile
    {
        path: 'adminprofile',
        canActivate: [AuthGuard],
        data: {
            title: 'Admin Profile '
        },
        loadChildren: () => import('../../adminprofile/adminprofile.module').then(m => m.AdminProfileModule)   
    }
];