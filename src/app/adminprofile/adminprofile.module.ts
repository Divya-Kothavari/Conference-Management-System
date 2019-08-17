import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminProfileRoutingModule } from './adminprofile-routing.module';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        AdminProfileRoutingModule
    ],
    declarations: [
        ChangepasswordComponent
    ],
    providers: [
    ]
})

export class AdminProfileModule {}