import { SideNavInterface } from '../../interfaces/side-nav.type';

export const ROUTES: SideNavInterface[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
    {
        path: '/users',
        title: 'Users',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'users',
        submenu: []
    },
    {
        path: '/adminprofile',
        title: 'My Profile',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'profile',
        submenu: []
    },
]    