import { Component, OnInit } from '@angular/core'
import { ThemeConstantService } from '../../shared/services/theme-constant.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
 
import { environment } from '../../../environments/environment';
 
@Component({
    templateUrl: './superadmin-dashboard.component.html'
})

export class SuperadminDashboardComponent implements OnInit {
    isVisible:boolean = false;
    isVisibleSub:boolean  = false;
    isVisibleReg:boolean  = false;
    isVisibleCoun:boolean  = false;
    isVisibleArticle: boolean = false;
    isVisibleArticleType: boolean = false;
    isLoading = false;
    isLoadingSub = false;
    isLoadingReg = false;
    isLoadingCoun = false;
    isLoadingArticle = false;
    isLoadingArticleType = false;
    
    allChecked: boolean = false;
    indeterminate: boolean = false;
    search : any;
    displayData = [];
    listOfAllData = [];
    mapOfCheckedId: { [key: string]: boolean } = {};
    loading = false;
    loadingSubjects = false;
    loadingRegions = false;
    loadingCountries = false;
    loadingArticles = false;
    loadingArticleType = false;
    
    pageSize = 5;
    pageIndex = 1;
    numberOfChecked = 0;
    editmode = false;

    listOfsubjects = [];
    listOfRegions = [];
    listOfCountries = [];
    listOfArticles = [];
    listOfArticleTypes = [];
    dispalySubjects = [];
    displayRegions = [];
    displayCountries = [];
    displayArticles = [];
    displayArticleTypes = [];
    roleForm: FormGroup;
    subjectForm: FormGroup;
    regionForm: FormGroup;
    countryForm: FormGroup;
    articleForm: FormGroup;
    articleTypeForm: FormGroup;
    role: any;
    selectedRegion;
    selectedStatus;

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

        this.countryForm = this.fb.group({
            countryName: [ null, [ Validators.required ] ],
            countryCode: [ null, [ Validators.required ] ],
            regionCode: [ null, [ Validators.required ] ],
            economicStatus: [ null, [ Validators.required ] ]
        });

        this.articleForm = this.fb.group({
            artcleCode: [ null, [ Validators.required ] ],
            articleDescription: [ null, [ Validators.required ] ]
        });

        this.articleTypeForm = this.fb.group({
            articleType: [ null, [ Validators.required ] ],
            articleTypeDescription: [ null, [ Validators.required ] ]
        });


        this.getRolesList();
        this.getSubjectsList();
        this.getRegionsList();
        this.getCountriesList();
        this.getArticleStatusList();
        this.getArticleTypeList();
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
        this.displayRegions = $event;
    }
    currentPageDataChangeCountry($event: Array<{ 
        countryName: string;
        countryCode: string;
    }>): void {
    this.displayCountries = $event;
    }
    currentPageDataChangeArticle($event: Array<{ 
        articleName: string;
        articleStatus: string;
    }>): void {
    this.displayArticles = $event;
    }

    currentPageDataChangeArticleType($event: Array<{ 
        articleType: string;
        articleTypeDescription: string;
    }>): void {
    this.displayArticleTypes = $event;
    }
    getRolesList(){
        this.loading = true;
        this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/userMgmt/role`).subscribe(
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
        this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/subject`).subscribe(
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
        this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmslocations/region`).subscribe(
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

    getCountriesList() {
        this.loadingCountries = true;
        this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmslocations/country`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    this.listOfCountries = resp.countries;
                }
                this.loadingCountries = false;
            },
            err => {
                console.log(err);
            }
    )
    }

    getArticleStatusList() {
        this.loadingArticles = true;
        this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/articlemgmt/articleStatus`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    this.listOfArticles = resp.articleStatuses;
                }
                this.loadingArticles = false;
            },
            err => {
                console.log(err);
            }
    )
    }

    getArticleTypeList() {
        this.loadingArticleType = true;
        this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/articleType
        `).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    this.listOfArticleTypes = resp.articleTypes;
                } else if (resp.message === 'No data found') {
                    this.listOfArticleTypes = [];
                }
                this.loadingArticleType = false;
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

    handleCancelCoun() {
        this.isVisibleCoun = false;
        this.countryForm.reset();
    }

    handleCancelArticle() {
        this.isVisibleArticle = false;
        this.articleForm.reset();
    }
    handleCancelArticleType() {
        this.isVisibleArticleType = false;
        this.articleTypeForm.reset();
    }
    addRole() {
        if (this.editmode) {
            this.isLoading = true;
            const role = {
                roleName: this.roleForm.controls['roleName'].value,
                roleDescription: this.roleForm.controls['roleDescription'].value
            }
            this.http.put(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/userMgmt/role`, role).subscribe(
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
                roleName: this.roleForm.controls['roleName'].value,
                roleDescription: this.roleForm.controls['roleDescription'].value
            }
            this.http.post(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/userMgmt/role`, role).subscribe(
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
                subjectName: this.subjectForm.controls['subjectName'].value,
                subjectDescription: this.subjectForm.controls['subjectDescription'].value
            }
            this.http.put(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt//subject`, subject).subscribe(
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
                subjectName: this.subjectForm.controls['subjectName'].value,
                subjectDescription: this.subjectForm.controls['subjectDescription'].value
            }
            this.http.post(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/subject`, subject).subscribe(
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
                regionName: this.regionForm.controls['regionName'].value,
                regionCode: this.regionForm.controls['regionCode'].value
            }
            this.http.put(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmslocations/region`, region).subscribe(
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
                regionName: this.regionForm.controls['regionName'].value,
                regionCode: this.regionForm.controls['regionCode'].value
            }
            this.http.post(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmslocations/region`, region).subscribe(
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

    addCountry() {
        if (this.editmode) {
            this.isLoadingCoun = true;
            const country = {
                countryName: this.countryForm.controls['countryName'].value,
                countryCode: this.countryForm.controls['countryCode'].value,
                regionCode: this.countryForm.controls['regionCode'].value,
                economicStatus: this.countryForm.controls['economicStatus'].value,
            }
            this.http.put(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmslocations/country`, country).subscribe(
            (resp: any) =>{
                this.isLoadingCoun = false;
                if (resp.status === 'Success') {
                    //console.log(resp.message);
                    this.message.success(resp.message);
                    this.handleCancelCoun();
                    this.editmode = false;
                    this.getCountriesList();
                }
                if(resp.status === 'Error'){
                    this.message.error(resp.message);
                    this.handleCancelReg();
                    this.getCountriesList();
                }
            },
            err => {
                console.log(err);
            }
        )
        } else {
            this.isLoadingCoun = true;
            const country = {
                countryName: this.countryForm.controls['countryName'].value,
                countryCode: this.countryForm.controls['countryCode'].value,
                regionCode: this.countryForm.controls['regionCode'].value,
                economicStatus: this.countryForm.controls['economicStatus'].value,
            }
            this.http.post(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmslocations/country`, country).subscribe(
            (resp: any) =>{
                this.isLoadingCoun = false;
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.handleCancelCoun();
                    this.getCountriesList();
                }
                if(resp.status === 'Error'){
                    this.message.error(resp.message);
                    this.handleCancelCoun();
                    this.getCountriesList();
                }
            },
            err => {
                console.log(err);
            }
        )
        }
    }

    addArticleStatus() {
        if (this.editmode) {
            this.isLoadingArticle = true;
            const articleStatus = {
                articleStatusCode: this.articleForm.controls['artcleCode'].value,
                articleStatusDescription: this.articleForm.controls['articleDescription'].value
            }
            this.http.put(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/articlemgmt/articleStatus`, articleStatus).subscribe(
            (resp: any) =>{
                this.isLoadingArticle = false;
                if (resp.status === 'Success') {
                    //console.log(resp.message);
                    this.message.success(resp.message);
                    this.handleCancelArticle();
                    this.editmode = false;
                    this.getArticleStatusList();
                }
                if(resp.status === 'Error'){
                    this.message.error(resp.message);
                    this.handleCancelArticle();
                    this.getArticleStatusList();
                }
            },
            err => {
                console.log(err);
            }
        )
        } else {
            this.isLoadingArticle = true;
            const articleStatus = {
                articleStatusCode: this.articleForm.controls['artcleCode'].value,
                articleStatusDescription: this.articleForm.controls['articleDescription'].value
            }
            this.http.post(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/articlemgmt/articleStatus`, articleStatus).subscribe(
            (resp: any) =>{
                this.isLoadingArticle = false;
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.handleCancelArticle();
                    this.getArticleStatusList();
                }
                if(resp.status === 'Error'){
                    this.message.error(resp.message);
                    this.handleCancelArticle();
                    this.getArticleStatusList();
                }
            },
            err => {
                console.log(err);
            }
        )
        }
    }
    addArticleType() {
        if (this.editmode) {
            this.isLoadingArticleType = true;
            const articletype = {
                articleType: this.articleTypeForm.controls['articleType'].value,
                articleTypeDescription: this.articleTypeForm.controls['articleTypeDescription'].value
            }
            this.http.put(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/articleType
            `, articletype).subscribe(
            (resp: any) =>{
                this.isLoadingArticleType = false;
                if (resp.status === 'Success') {
                    //console.log(resp.message);
                    this.message.success(resp.message);
                    this.handleCancelArticleType();
                    this.editmode = false;
                    this.getArticleTypeList();
                }
                if(resp.status === 'Error'){
                    this.message.error(resp.message);
                    this.handleCancelArticleType();
                    this.getArticleTypeList();
                }
            },
            err => {
                console.log(err);
            }
        )
        } else {
            this.isLoadingArticleType = true;
            const articletype = {
                articleType: this.articleTypeForm.controls['articleType'].value,
                articleTypeDescription: this.articleTypeForm.controls['articleTypeDescription'].value
            }
            this.http.post(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/articleType
            `, articletype).subscribe(
            (resp: any) =>{
                this.isLoadingArticleType = false;
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.handleCancelArticleType();
                    this.getArticleTypeList();
                }
                if(resp.status === 'Error'){
                    this.message.error(resp.message);
                    this.handleCancelArticleType();
                    this.getArticleTypeList();
                }
            },
            err => {
                console.log(err);
            }
        )
        }
    }
    deleteRole(rolename) {
        this.http.delete(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/userMgmt/role/${rolename}`).subscribe(
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
        this.http.delete(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/subject/${subjectname}`).subscribe(
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
        this.http.delete(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmslocations/region/${regionCode}`).subscribe(
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

    deleteCountry(countryCode) {
        this.http.delete(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmslocations/country/${countryCode}`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.getCountriesList();
                }
            },
            err => {
                console.log(err);
            }
        )
    }

    deleteArticleStatus(articleStatusCode) {
        this.http.delete(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/articlemgmt/articleStatus/${articleStatusCode}`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.getArticleStatusList();
                }
            },
            err => {
                console.log(err);
            }
        )
    }

    deleteArticleStatusType(articletype) {
        this.http.delete(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/articleType/${articletype}`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.getArticleTypeList();
                }
            },
            err => {
                console.log(err);
            }
        )
    }
    openRoles() {
        this.roleForm.get('roleName').enable();
    }
    editRole(name, desc) {
        this.roleForm.controls['roleName'].setValue(name);
        this.roleForm.controls['roleDescription'].setValue(desc);
        this.isVisible = true;
        this.roleForm.get('roleName').disable();
    }
    openSubjects() {
        this.subjectForm.get('subjectName').enable();
    }
    editSubject(name, desc) {
        this.subjectForm.controls['subjectName'].setValue(name);
        this.subjectForm.controls['subjectDescription'].setValue(desc);
        this.isVisibleSub = true;
        this.subjectForm.get('subjectName').disable();
    }
    openRegions() {
        this.regionForm.get('regionCode').enable();
    }
    editRegion(name, desc) {
        this.regionForm.controls['regionName'].setValue(name);
        this.regionForm.controls['regionCode'].setValue(desc);
        this.isVisibleReg = true;
        this.regionForm.get('regionCode').disable();
    }
    getCountries() {
        this.countryForm.get('countryCode').enable();
    }
    editCountry(countryname, countrycode, regioncode, status) {
        this.countryForm.controls['countryName'].setValue(countryname);
        this.countryForm.controls['countryCode'].setValue(countrycode);
        this.countryForm.controls['regionCode'].setValue(regioncode);
        this.countryForm.controls['economicStatus'].setValue(status);
        this.isVisibleCoun = true;
        this.countryForm.get('countryCode').disable();
    }
    openArticlestatus() {
        this.articleForm.get('artcleCode').enable();
    }
    openArticleType() {
        this.articleTypeForm.get('articleType').enable();
    }
    editArticleStatus(desc, code) {
        this.articleForm.controls['artcleCode'].setValue(code);
        this.articleForm.controls['articleDescription'].setValue(desc);
        this.isVisibleArticle = true;
        this.articleForm.get('artcleCode').disable();
    }
    editArticleStatusType(type, desc) {
        this.articleTypeForm.controls['articleType'].setValue(type);
        this.articleTypeForm.controls['articleTypeDescription'].setValue(desc);
        this.isVisibleArticleType = true;
        this.articleTypeForm.get('articleType').disable();
    }
}  
