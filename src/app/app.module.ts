import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './shared/template/template.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CommonService } from '../app/shared/services/common.service';
import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';

import { NgChartjsModule } from 'ng-chartjs';
import { ThemeConstantService } from './shared/services/theme-constant.service';
import { AuthGuardAdminService } from './core/services/auth-guard-admin.service';
import { AuthGuardAuthorService } from './core/services/auth-guard-author.service';
import { AuthGuardEditorService } from './core/services/auth-guard-editor.service';
import { AuthGuardSuperadminService } from './core/services/auth-guard-superadmin.service';
import { AuthGuardReviewerService } from './core/services/auth-guard-reviewer.service';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        FullLayoutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgZorroAntdModule,
        AppRoutingModule,
        TemplateModule,
        SharedModule,
        FormsModule,
        CoreModule,
        NgChartjsModule
    ],
    providers: [
        { 
            provide: NZ_I18N,
            useValue: en_US, 
        },
        ThemeConstantService,
        CommonService,
        AuthGuardEditorService,
        AuthGuardAdminService,
        AuthGuardAuthorService,
        AuthGuardReviewerService,
        AuthGuardSuperadminService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
