import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './shared/template/template.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { AvatarModule } from 'ngx-avatar';

import { NgChartjsModule } from 'ng-chartjs';
import { ThemeConstantService } from './shared/services/theme-constant.service';
import { SortablejsModule } from 'ngx-sortablejs';
 import { environment } from '../environments/environment';
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
        SortablejsModule.forRoot({ animation: 150 }),
        TemplateModule,
        SharedModule,
        FormsModule,
        CoreModule,
        AvatarModule,
        NgChartjsModule
     ],
    providers: [
        { 
            provide: NZ_I18N,
            useValue: en_US, 
        },
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        ThemeConstantService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
