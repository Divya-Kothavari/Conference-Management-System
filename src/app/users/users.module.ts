import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { ProfileComponent } from './profile/profile.component';
import { TableService } from '../shared/services/table.service';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        UsersRoutingModule
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