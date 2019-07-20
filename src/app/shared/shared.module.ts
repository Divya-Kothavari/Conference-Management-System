import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SupportPopUpComponent } from './support-pop-up/support-pop-up.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

// tslint:disable-next-line: max-line-length
import { NzLayoutModule, NzAvatarModule, NzDropDownModule, NzBreadCrumbModule, NzIconModule, NzGridModule, NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import { ProfileHeaderComponent } from './profile-header/profile-header.component';

@NgModule({
  exports: [
    SupportPopUpComponent,
    TermsConditionsComponent,
    FooterComponent,
    ProfileHeaderComponent,
    SidebarComponent
  ],
  // tslint:disable-next-line:max-line-length
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NgZorroAntdModule, NzLayoutModule, NzAvatarModule, NzDropDownModule, NzBreadCrumbModule, NzIconModule, NzGridModule],
  declarations: [
    SupportPopUpComponent,
    SidebarComponent,
    FooterComponent,
    TermsConditionsComponent,
    ProfileHeaderComponent
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ]
})
export class SharedModule {}
