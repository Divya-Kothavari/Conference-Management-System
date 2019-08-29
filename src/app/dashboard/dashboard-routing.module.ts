import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperadminDashboardComponent } from './superadmin/superadmin-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';
import { EditorDashboardComponent } from './editor/editor-dashboard.component';
import { ReviewerDashboardComponent } from './reviewer/reviewer-dashboard.component';
import { AuthorDashboardComponent } from './author/author-dashboard.component';
import { AuthGuardSuperadminService } from '../core/services/auth-guard-superadmin.service';
import { AuthGuardAuthorService } from '../core/services/auth-guard-author.service';
import { AuthGuardEditorService } from '../core/services/auth-guard-editor.service';
import { AuthGuardReviewerService } from '../core/services/auth-guard-reviewer.service';
import { AuthGuardAdminService } from '../core/services/auth-guard-admin.service';

const routes: Routes = [
    {
        path: '',
        component: SuperadminDashboardComponent,
        data: {
            title: 'Dashboard ',
            headerDisplay: "none"
        }
    }
    // },
    // {
    //     path: '',
    //     canActivate: [AuthGuardAdminService ],
    //     component: AdminDashboardComponent,
    //     data: {
    //         title: 'Dashboard ',
    //         headerDisplay: "none"
    //     }
    // },
    // {
    //     path: '',
    //     canActivate: [ AuthGuardAuthorService ],
    //     component: AuthorDashboardComponent,
    //     data: {
    //         title: 'Dashboard ',
    //         headerDisplay: "none"
    //     }
    // },
    // {
    //     path: '',
    //     canActivate: [AuthGuardEditorService ],
    //     component: EditorDashboardComponent,
    //     data: {
    //         title: 'Dashboard ',
    //         headerDisplay: "none"
    //     }
    // },
    // {
    //     path: '',
    //     canActivate: [AuthGuardReviewerService],
    //     component: ReviewerDashboardComponent,
    //     data: {
    //         title: 'Dashboard ',
    //         headerDisplay: "none"
    //     }
    // },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }
