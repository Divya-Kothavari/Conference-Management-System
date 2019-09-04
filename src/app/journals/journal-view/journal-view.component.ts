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

@Component({
    templateUrl: './journal-view.component.html'
})

export class JournalViewComponent {
    journalid;
    journalDetails;
    selectedUser;
    dataAvailable = false;
    constructor(private fb: FormBuilder, private modalService: NzModalService, private message: NzMessageService,
        private http: HttpClient,
        private route: ActivatedRoute) {
            this.route.params.subscribe( params => {
               this.journalid = params.id;
            } );
    }

    ngOnInit(): void {
         //get user by id
         this.http.get(`${apiUrl}${portJournalmgmt}/cmsjournalmgmt/journal/${this.journalid}`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    console.log(resp.journal);
                    this.journalDetails = resp.journal;
                    this.selectedUser = this.journalDetails.journalPrimaryAdmin.split(',');
                    this.http.get(`${apiUrl}${portJournalmgmt}/cmsjournalmgmt/editorialBoard/${this.journalid}`).subscribe(
                        (resp: any) =>{
                            if (resp.status === 'Success') {
                             this.dataAvailable = true;
                            }
                        },
                        err => {
                             console.log(err);
                        }
                    );
                    this.dataAvailable = true;
                }
            },
            err => {
                 console.log(err);
            }
        );

    }


}    