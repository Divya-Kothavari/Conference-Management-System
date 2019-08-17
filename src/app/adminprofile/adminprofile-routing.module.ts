import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
    {
        path: 'changepassword',
        component: ChangepasswordComponent,
        data: {
            title: 'Change Password',
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminProfileRoutingModule { }
