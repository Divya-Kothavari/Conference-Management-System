import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninRoutingModule } from './signin.routing.module';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CoreModule,
        ReactiveFormsModule,
        SigninRoutingModule
    ],
    declarations: [
        LoginComponent
    ]
})

export class SigninModule {}