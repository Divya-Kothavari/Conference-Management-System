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
        icon: 'team',
        submenu: []
    },
    {
        path: '/journals',
        title: 'Journals',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'book',
        submenu: []
    },
]    