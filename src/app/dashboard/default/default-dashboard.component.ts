import { Component, OnInit } from '@angular/core'
import { ThemeConstantService } from '../../shared/services/theme-constant.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
 
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;
const portUsermgmt = environment.portUsermgmt;
const portJournalmgmt = environment.portJournalmgmt;
const portLocations = environment.portLocations;
@Component({
    templateUrl: './default-dashboard.component.html'
})

export class DefaultDashboardComponent implements OnInit {
    isVisible:boolean = false;
    isVisibleSub = false;
    isVisibleReg = false;
    isLoading = false;
    isLoadingSub = false;
    isLoadingReg = false;

    allChecked: boolean = false;
    indeterminate: boolean = false;
    search : any;
    displayData = [];
    listOfAllData = [];
    mapOfCheckedId: { [key: string]: boolean } = {};
    loading = false;
    loadingSubjects = false;
    loadingRegions = false;
    pageSize = 5;
    pageIndex = 1;
    numberOfChecked = 0;
    editmode = false;

    listOfsubjects = [];
    listOfRegions = [];
    dispalySubjects = [];
 
    roleForm: FormGroup;
    subjectForm: FormGroup;
    regionForm: FormGroup;
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

        this.subjectForm = this.fb.group({
            subjectName: [ null, [ Validators.required ] ],
            subjectDescription: [ null, [ Validators.required ] ]
        });

        this.regionForm = this.fb.group({
            regionName: [ null, [ Validators.required ] ],
            regionCode: [ null, [ Validators.required ] ]
        });

        this.getRolesList();
        this.getSubjectsList();
        this.getRegionsList();
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
    currentPageDataChangeRegion($event: Array<{ 
        regionName: string;
        regionCode: string;
    }>): void {
        this.listOfRegions = $event;
    }

    getRolesList(){
        this.loading = true;
        this.http.get(`${apiUrl}${portUsermgmt}/cmsusermgmt/userMgmt/role`).subscribe(
        (resp: any) =>{
            if (resp.status === 'Success') {
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

    getRegionsList() {
        this.loadingRegions = true;
        this.http.get(`${apiUrl}${portLocations}/cmslocations/locations/region`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    this.listOfRegions = resp.regions;
                }
                this.loadingRegions = false;
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

    handleCancelSub() {
        this.isVisibleSub = false;
        this.subjectForm.reset();
    }

    handleCancelReg() {
        this.isVisibleReg = false;
        this.regionForm.reset();
    }
   
    addRole() {
        if (this.editmode) {
            this.isLoading = true;
            const role = {
                roleName: this.roleForm.value.roleName,
                roleDescription: this.roleForm.value.roleDescription
            }
            this.http.put(`${apiUrl}${portUsermgmt}/cmsusermgmt/userMgmt/role`, role).subscribe(
            (resp: any) =>{
                this.isLoading = false;
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
            this.isLoading = true;
            const role = {
                roleName: this.roleForm.value.roleName,
                roleDescription: this.roleForm.value.roleDescription
            }
            this.http.post(`${apiUrl}${portUsermgmt}/cmsusermgmt/userMgmt/role`, role).subscribe(
            (resp: any) =>{
                this.isLoading = false;
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.handleCancel();
                    this.getRolesList();
                }
                if (resp.status === 'Error') {
                    this.message.error(resp.message);
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

    addSubject() {
        if (this.editmode) {
            this.isLoadingSub = true;
            const subject = {
                subjectName: this.subjectForm.value.subjectName,
                subjectDescription: this.subjectForm.value.subjectDescription
            }
            this.http.put(`${apiUrl}${portJournalmgmt}/cmsjournalmgmt/journals/subject`, subject).subscribe(
            (resp: any) =>{
                this.isLoadingSub = false;
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.handleCancelSub();
                    this.editmode = false;
                    this.getSubjectsList();
                }
                if(resp.status === 'Error'){
                    this.message.error(resp.message);
                    this.handleCancelSub();
                    this.getSubjectsList();
                }
            },
            err => {
                console.log(err);
            }
        )
        } else {
            this.isLoadingSub = true;
            const subject = {
                subjectName: this.subjectForm.value.subjectName,
                subjectDescription: this.subjectForm.value.subjectDescription
            }
            this.http.post(`${apiUrl}${portJournalmgmt}/cmsjournalmgmt/journals/subject`, subject).subscribe(
            (resp: any) =>{
                this.isLoadingSub = false;
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.handleCancelSub();
                    this.getSubjectsList();
                }
                if(resp.status === 'Error'){
                    this.message.error(resp.message);
                    this.handleCancelSub();
                    this.getSubjectsList();
                }
            },
            err => {
                console.log(err);
            }
        )
        }
    }

    addRegion() {
        if (this.editmode) {
            this.isLoadingReg = true;
            const region = {
                regionName: this.regionForm.value.regionName,
                regionCode: this.regionForm.value.regionCode
            }
            this.http.put(`${apiUrl}${portLocations}/cmslocations/locations/region`, region).subscribe(
            (resp: any) =>{
                this.isLoadingReg = false;
                if (resp.status === 'Success') {
                    //console.log(resp.message);
                    this.message.success(resp.message);
                    this.handleCancelReg();
                    this.editmode = false;
                    this.getRegionsList();
                }
                if(resp.status === 'Error'){
                    this.message.error(resp.message);
                    this.handleCancelReg();
                    this.getRegionsList();
                }
            },
            err => {
                console.log(err);
            }
        )
        } else {
            this.isLoadingReg = true;
            const region = {
                regionName: this.regionForm.value.regionName,
                regionCode: this.regionForm.value.regionCode
            }
            this.http.post(`${apiUrl}${portLocations}/cmslocations/locations/region`, region).subscribe(
            (resp: any) =>{
                this.isLoadingReg = false;
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.handleCancelReg();
                    this.getRegionsList();
                }
                if(resp.status === 'Error'){
                    this.message.error(resp.message);
                    this.handleCancelReg();
                    this.getRegionsList();
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

    deleteSubject(subjectname) {
        this.http.delete(`${apiUrl}${portJournalmgmt}/cmsjournalmgmt/journals/subject/${subjectname}`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.getSubjectsList();
                }
            },
            err => {
                console.log(err);
            }
        )
    }

    deleteRegion(regionCode) {
        this.http.delete(`${apiUrl}${portLocations}/cmslocations/locations/region/${regionCode}`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.getRegionsList();
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

    editSubject(name, desc) {
        this.subjectForm.controls['subjectName'].setValue(name);
        this.subjectForm.controls['subjectDescription'].setValue(desc);
        this.isVisibleSub = true;
    }

    editRegion(name, code) {
        this.subjectForm.controls['regionName'].setValue(name);
        this.subjectForm.controls['regionCode'].setValue(code);
        this.isVisibleReg = true;
    }
}  
