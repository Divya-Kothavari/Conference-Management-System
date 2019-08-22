import { Component, OnInit } from '@angular/core'
import { ThemeConstantService } from '../../shared/services/theme-constant.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
 
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;
const portUsermgmt = environment.portUsermgmt;
const portJournalmgmt = environment.portJournalmgmt;
@Component({
    templateUrl: './default-dashboard.component.html'
})

export class DefaultDashboardComponent implements OnInit {
    isVisible:boolean = false;
    allChecked: boolean = false;
    indeterminate: boolean = false;
    search : any;
    displayData = [];
    listOfAllData = [];
    mapOfCheckedId: { [key: string]: boolean } = {};
    loading = false;
    loadingSubjects = false;
    pageSize = 5;
    pageIndex = 1;
    numberOfChecked = 0;
    editmode = false;

    listOfsubjects = [];
    dispalySubjects = [];

    roleForm: FormGroup;
    role: any;
    constructor(private colorConfig:ThemeConstantService,
        private http: HttpClient,
        private fb: FormBuilder,
        private message: NzMessageService, ) {
        
    }

    ngOnInit(){
        this.roleForm = this.fb.group({
            roleName: [ null, [ Validators.required ] ],
            roleDescription: [ null, [ Validators.required ] ]
        });
        this.getRolesList();
        this.getSubjectsList();
    }
    currentPageDataChange($event: Array<{ 
        name: string;
        description: string;
    }>): void {
        this.displayData = $event;
    }
    currentPageDataChangeSubject($event: Array<{ 
        name: string;
        description: string;
    }>): void {
        this.dispalySubjects = $event;
    }
    getRolesList(){
        this.loading = true;
        this.http.get(`${apiUrl}${portUsermgmt}/cmsusermgmt/userMgmt/role`).subscribe(
        (resp: any) =>{
            if (resp.status === 'Success') {
                console.log(resp.roles);
                this.listOfAllData = resp.roles;
            }
            this.loading = false;
        },
        err => {
            console.log(err);
        }
    )
    }
    getSubjectsList() {
        this.loadingSubjects = true;
        this.http.get(`${apiUrl}${portJournalmgmt}/cmsjournalmgmt/journals/subject`).subscribe(
        (resp: any) =>{
            if (resp.status === 'Success') {
                this.listOfsubjects = resp.subjects;
            }
            this.loadingSubjects = false;
        },
        err => {
            console.log(err);
        }
    )
    }

    handleCancel() {
        this.isVisible = false;
        this.roleForm.reset();
    }
   
    addRole() {
        if (this.editmode) {
            const role = {
                roleName: this.roleForm.value.roleName,
                roleDescription: this.roleForm.value.roleDescription
            }
            this.http.put(`${apiUrl}${portUsermgmt}/cmsusermgmt/userMgmt/role`, role).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.handleCancel();
                    this.editmode = false;
                    this.getRolesList();
                }
            },
            err => {
                console.log(err);
            }
        )
        } else {
            const role = {
                roleName: this.roleForm.value.roleName,
                roleDescription: this.roleForm.value.roleDescription
            }
            this.http.post(`${apiUrl}${portUsermgmt}/cmsusermgmt/userMgmt/role`, role).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.handleCancel();
                    this.getRolesList();
                }
            },
            err => {
                console.log(err);
            }
        )
        }
    }
    deleteRole(rolename) {
        this.http.delete(`${apiUrl}${portUsermgmt}/cmsusermgmt/userMgmt/role/${rolename}`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.getRolesList();
                }
            },
            err => {
                console.log(err);
            }
        )
    }
    editRole(name, desc) {
        this.roleForm.controls['roleName'].setValue(name);
        this.roleForm.controls['roleDescription'].setValue(desc);
        this.isVisible = true;
    }
}  
