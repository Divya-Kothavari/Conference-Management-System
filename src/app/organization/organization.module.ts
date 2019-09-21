import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgDetailsComponent } from './org-details/org-details.component';
import { OrganizationRoutingModule } from './organization.routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
 
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;
const portUsermgmt = environment.portUsermgmt;
const portJournalmgmt = environment.portJournalmgmt;
const portLocations = environment.portLocations;



@NgModule({
  declarations: [OrgDetailsComponent],
  imports: [
    CommonModule,
        SharedModule,
        CoreModule,
        ReactiveFormsModule,
        QuillModule,
        OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
