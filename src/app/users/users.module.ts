import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { ProfileComponent } from './profile/profile.component';
import { TableService } from '../shared/services/table.service';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        NzSkeletonModule,
        NzInputModule
    ],
    declarations: [
        UsersListComponent,
        ProfileComponent
    ],
    providers: [
        TableService
    ]
})

export class UsersModule {}