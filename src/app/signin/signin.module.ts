import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninRoutingModule } from './signin.routing.module';

import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        SigninRoutingModule
    ],
    declarations: [
        LoginComponent
    ]
})

export class SigninModule {}