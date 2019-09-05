import { Component } from '@angular/core';
import { UploadFile } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { UploadXHRArgs } from 'ng-zorro-antd/upload';
import { environment } from '../../../environments/environment';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';




const apiUrl = environment.apiUrl;
const portUsermgmt = environment.portUsermgmt;
const portJournalmgmt = environment.portJournalmgmt;
const portLocations = environment.portLocations;


@Component({
    templateUrl: './journal-view.component.html'
})

export class JournalViewComponent {
    journalid;
    journalDetails;
    selectedUser;
    dataAvailable = false;
    isLoadingEbmember = false;
    isVisibleEbmember;
    ebmemberForm: FormGroup;
    listofregions = [];
    eblist= [];
    listofcountries = [];
    constructor(private fb: FormBuilder, private modalService: NzModalService, private message: NzMessageService,
        private http: HttpClient,
        private route: ActivatedRoute) {
            this.route.params.subscribe( params => {
               this.journalid = params.id;
            } );
    }

    ngOnInit(): void {
        this.ebmemberForm = this.fb.group({
            editorId: [ null, [ Validators.required ] ],
            editorName: [ null, [ Validators.required ] ],
            editorType:  [ null, [ Validators.required ] ],
            editorDescription :  [ null, [ Validators.required ] ],
            biography: [ null, [ Validators.required ] ],
            interests: [ null, [ Validators.required ] ],
            universityName:  [ null, [ Validators.required ] ],
            region :  [ null, [ Validators.required ] ],
            country:  [ null, [ Validators.required ] ],
            journalShortName :  [ this.journalid ],
        });
       
         //get user by id
         this.http.get(`${apiUrl}${portJournalmgmt}/cmsjournalmgmt/journal/${this.journalid}`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    console.log(resp.journal);
                    this.journalDetails = resp.journal;
                    this.selectedUser = this.journalDetails.journalPrimaryAdmin.split(',');
                    this.getEbList();
                    this.dataAvailable = true;
                }
            },
            err => {
                 console.log(err);
            }
        );

    }

    getEbList() {
        this.http.get(`${apiUrl}${portJournalmgmt}/cmsjournalmgmt/editorialBoard/${this.journalid}`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    this.eblist  = resp.editorialBoards;
                }
            },
            err => {
                 console.log(err);
            }
        );
    }

    getRegionsList() {
        this.http.get(`${apiUrl}${portLocations}/cmslocations/locations/region`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                this.listofregions = [];
                resp.regions.forEach(element => {
                    this.listofregions.push({name: element.regionName, code: element.regionCode});
                });
            }
            },
            err => {
                console.log(err);
            }
    )
    }

    getCountriesList() {
        this.http.get(`${apiUrl}${portLocations}/cmslocations/locations/countries/${this.ebmemberForm.value.region}`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    this.listofcountries = [];
                    resp.countries.forEach(element => {
                        this.listofcountries.push(element.countryName)
                    });
                }
            },
            err => {
                console.log(err);
            }
    )
    }

    handleCancelEbmmeber() {
        this.isVisibleEbmember = false;
        this.ebmemberForm.reset();
    }
    addEbmember() {
        this.isLoadingEbmember = true;
            const editorialBoard = {
                biography: this.ebmemberForm.value.biography,
                country: this.ebmemberForm.value.country,
                editorDescription: this.ebmemberForm.value.editorDescription,
                editorId: this.ebmemberForm.value.editorId,
                editorName: this.ebmemberForm.value.editorName,
                editorType: this.ebmemberForm.value.editorType,
                interests: this.ebmemberForm.value.interests,
                journalShortName: this.ebmemberForm.value.journalShortName,
                region: this.ebmemberForm.value.region,
                universityName: this.ebmemberForm.value.universityName,

            }
            this.http.post(`${apiUrl}${portJournalmgmt}/cmsjournalmgmt/editorialBoard`, editorialBoard).subscribe(
            (resp: any) =>{
                this.isLoadingEbmember = false;
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.handleCancelEbmmeber();
                    this.getEbList();
                 }
                if (resp.status === 'Error') {
                    this.message.error(resp.message);
                    this.handleCancelEbmmeber();
                 }
            },
            err => {
                console.log(err);
            }
        )
    }
}    