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
 


@Component({
    templateUrl: './journal-view.component.html'
})

export class JournalViewComponent {
    journalid;
    journalDetails;
    selectedUser;
    dataAvailable = false;
    isLoadingEbmember = false;
    invalidId = false;
    isVisibleEbmember;
    ebmemberForm: FormGroup;
    listofregions = [];
    eblist = [];
    editorMembers = [];
    listofcountries = [];
    isLoading: boolean;
    isLoadingCountry = true;
    editmode = false;;
    constructor(private fb: FormBuilder, private modalService: NzModalService, private message: NzMessageService,
        private http: HttpClient,
        private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.journalid = params.id;
        });
    }

    ngOnInit(): void {
        this.ebmemberForm = this.fb.group({
            editorId: [null, [Validators.required]],
            editorName: [null, [Validators.required]],
            editorType: [null, [Validators.required]],
            editorDescription: [null, [Validators.required]],
            universityName: [null, [Validators.required]],
            journalShortName: [this.journalid],
        });

        this.ebmemberForm.controls['journalShortName'].setValue(this.journalid);

        //get user by id
        this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journal/${this.journalid}`).subscribe(
            (resp: any) => {
                if (resp.status === 'Success') {
                    this.journalDetails = resp.journal;
                    if (this.journalDetails.journalPrimaryAdmin) {
                        this.selectedUser = this.journalDetails.journalPrimaryAdmin.split(',');
                    }
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
        this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/editorialBoard/${this.journalid}`).subscribe(
            (resp: any) => {
                if (resp.status === 'Success') {
                    this.eblist = resp.editorialBoards;
                }
            },
            err => {
                console.log(err);
            }
        );
    }

    getUsersByRole() {
        this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/userMgmt/users/editor`).subscribe(
            (resp: any) => {
                if (resp.status === 'Success') {
                    this.editorMembers = resp.userIds;
                }
                if (resp.status === 'Error') {
                    this.message.error(resp.message);
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
    addEbmember(edID) {
        if (this.editmode) {
            this.isLoadingEbmember = true;
            const editorialBoard = {
                editorDescription: this.ebmemberForm.value.editorDescription,
                editorId: this.ebmemberForm.value.editorId,
                editorName: this.ebmemberForm.value.editorName,
                editorType: this.ebmemberForm.value.editorType,
                journalShortName: this.ebmemberForm.value.journalShortName,
                universityName: this.ebmemberForm.value.universityName,

            }
            this.http.put(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/editorialBoard`, editorialBoard).subscribe(
                (resp: any) => {
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
        } else {
            this.isLoadingEbmember = true;
            const editorialBoard = {
                editorDescription: this.ebmemberForm.value.editorDescription,
                editorId: this.ebmemberForm.value.editorId,
                editorName: this.ebmemberForm.value.editorName,
                editorType: this.ebmemberForm.value.editorType,
                journalShortName: this.ebmemberForm.value.journalShortName,
                universityName: this.ebmemberForm.value.universityName,

            }
            this.http.post(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/editorialBoard`, editorialBoard).subscribe(
                (resp: any) => {
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

    editEbMember(ebmember) {
        this.ebmemberForm.controls['editorId'].setValue(ebmember.editorId);
        this.ebmemberForm.controls['editorName'].setValue(ebmember.editorName);
        this.ebmemberForm.controls['editorType'].setValue(ebmember.editorType);
        this.ebmemberForm.controls['editorDescription'].setValue(ebmember.editorDescription);
        this.ebmemberForm.controls['universityName'].setValue(ebmember.universityName);
        this.ebmemberForm.controls['journalShortName'].setValue(ebmember.journalShortName);

        this.isVisibleEbmember = true;

    }

    deleteEbMemeber(eId) {
        this.http.delete(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/editorialBoard/${this.journalid}/${eId}`).subscribe(
            (resp: any) => {
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.getEbList();
                }
            },
            err => {
                console.log(err);
            }
        );
    }

    cancel() {
        //
    }

    validateEditorId(e) {
        if (e.code === 'Space') {
            this.invalidId = true;
            e.preventDefault();
           } else {
               this.invalidId = false;
           }
    }

}    