import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

import { SupportPopUpComponent } from '../shared/support-pop-up/support-pop-up.component';
import { TermsConditionsComponent } from '../shared/terms-conditions/terms-conditions.component';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [SigninComponent],
  providers: [
    { provide: NZ_I18N, useValue: en_US }],
  entryComponents: [
    SupportPopUpComponent,
    TermsConditionsComponent
  ]
})
export class UserModule { }
