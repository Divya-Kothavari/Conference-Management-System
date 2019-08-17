import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';

import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MembersComponent } from './members/members.component';
import { PricingComponent } from './pricing/pricing.component';
import { SettingComponent } from './setting/setting.component';
import { BlogGridComponent } from './blog/blog-grid/blog-grid.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        PagesRoutingModule
    ],
    declarations: [
        ProfileComponent,
        InvoiceComponent,
        MembersComponent,
        PricingComponent,
        SettingComponent,
        BlogGridComponent,
        BlogListComponent,
        BlogPostComponent
    ],
    providers: [
    ]
})

export class PagesModule {}