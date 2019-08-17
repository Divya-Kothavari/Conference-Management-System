import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
    {
        path: 'userslist',
        component: UsersListComponent,
        data: {
            title: 'UsersList'
        }
    },
    {
        path: 'profile/:id',
        component: ProfileComponent,
        data: {
            title: 'Profile'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule { }
