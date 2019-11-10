import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http'; 


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
    aboutfalg = true;
    aimsflag = false;
    ebflag = false;
    instructionsflag = false;
    manuscriptfalg = false;
    // ebmemberForm: FormGroup;
    listofregions = [];
    eblist = [];
    listofcountries = [];
    isLoading: boolean;
    isLoadingCountry = true;
    editmode = false;;
    constructor(
        private route: ActivatedRoute,
        private http: HttpClient
        ) {
        this.route.params.subscribe(params => {
            this.journalid = params.id;
        });
    }

    ngOnInit(): void {

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
    aboutClicked() {
        this.aboutfalg = true;
        this.aimsflag = false;
        this.ebflag = false;
        this.instructionsflag = false;
        this.manuscriptfalg = false;
    }
    aimsClicked() {
        this.aboutfalg = false;
        this.aimsflag = true;
        this.ebflag = false;
        this.instructionsflag = false;
        this.manuscriptfalg = false;
    }
    instructionsClicked() {
        this.aboutfalg = false;
        this.aimsflag = false;
        this.ebflag = false;
        this.instructionsflag = true;
        this.manuscriptfalg = false;
    }
    ebClicked() {
        this.aboutfalg = false;
        this.aimsflag = false;
        this.ebflag = true;
        this.instructionsflag = false;
        this.manuscriptfalg = false;
    }
    manuscriptClicked() {
        this.aboutfalg = false;
        this.aimsflag = false;
        this.ebflag = false;
        this.instructionsflag = false;
        this.manuscriptfalg = true;
    }

}    