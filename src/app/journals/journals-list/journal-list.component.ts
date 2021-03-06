import { Component, TemplateRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { ProjectList } from '../../shared/interfaces/project-list.type';

import { environment } from '../../../environments/environment';


import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
 


@Component({
    templateUrl: './journal-list.component.html'
})

export class JournalListComponent  {

    view: string = 'cardView';
    newProject: boolean = false;
    // projectList: ProjectList[];
    journal: object;
    invalidId = false;
    journalForm: FormGroup;
    selectedJournal;
    isVisible = false;
    loading: boolean;
    dataAvailable = false;
    listOfAllJournals = [];
    subjectsList = [];
    adminsList = [];
    subjectForm: any;
    isLoading = false;
    editmode = false;
  journalmodal;
  uploadUrl;

    constructor (
        private fb: FormBuilder,
        private sanitizer : DomSanitizer,
        private modalService: NzModalService, private http: HttpClient, private message: NzMessageService,
        ) {}

    ngOnInit(): void {

        this.journalForm = this.fb.group({
            journalName: [ null, [ Validators.required ] ],
            journalShortName: [ null, [ Validators.required ] ],
            journalEmail: [ null, [Validators.email, Validators.required] ],
            aboutJounal:  [ null, [ Validators.required ] ],
            subject :  [ null, [ Validators.required ] ],
            primayUser: [null, [Validators.required]],
        });
       
        this.getJournalsList();

        this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/subject`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    resp.subjects.forEach(element => {
                        this.subjectsList.push(element.subjectName);
                    });
                    
                }
            },
            err => {
                 console.log(err);
            }
        );
        this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/userMgmt/users/Admin`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                   this.adminsList = resp.userIds;
                }
            },
            err => {
                console.log(err);
            }
        );
       
    }

    showNewProject(newProjectContent: TemplateRef<{}>, newProjectFooter: TemplateRef<{}>) {
        this.journalmodal = this.modalService.create({
            nzTitle: 'Create New Journal',
            nzContent: newProjectContent,
            nzFooter: newProjectFooter,
            nzWidth: 800
        })    
    }
    handleCancelJournal() {
       this.journalmodal.destroy();
       this.journalForm.reset();
    }

    addJournal() {
            this.isLoading = true;
            const journal = {
                journalName: this.journalForm.value.journalName,
                journalShortName: this.journalForm.value.journalShortName,
                journalEmail: this.journalForm.value.journalEmail,
                aboutJournal: this.journalForm.value.aboutJounal,
                journalPrimaryAdmin: this.journalForm.value.primayUser.join()
            }
            this.http.post(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journal`, journal).subscribe(
            (resp: any) =>{
                this.isLoading = false;
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.http.post(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journalSubjects/${this.journalForm.value.journalShortName}/${this.journalForm.value.subject}`, {}).subscribe(
                        (resp: any) =>{
                            if (resp.status === 'Success') {
                                this.handleCancelJournal();
                                this.getJournalsList();
                             }
                            if (resp.status === 'Error') {
                                this.message.error(resp.message);
                                this.handleCancelJournal();
                             }
                        },
                        err => {
                            console.log(err);
                        }
                    )
                 }
                if (resp.status === 'Error') {
                    this.message.error(resp.message);
                    this.handleCancelJournal();
                 }
            },
            err => {
                console.log(err);
            }
        )
    }
    upoadFlyerUrl;
    uploadFlyerLogo;

    getJournalsList(){
        this.loading = true;
        this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journal`).subscribe(
        (resp: any) =>{
            if (resp.status === 'Success') {
                let roles = window.localStorage.getItem('role');
                let currentUser = window.localStorage.getItem('userid');
               const userroles = roles.split(',');
               if (userroles.includes('SuperAdmin')) {
                  this.listOfAllJournals = resp.journals;
               } else if (userroles.includes('Admin')) {
                 this.listOfAllJournals = resp.journals.filter(journal => journal.journalPrimaryAdmin === currentUser);
               }
               this.listOfAllJournals.forEach((journal) => {
                this.uploadUrl= `http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/userMgmt/user/profileImage/${journal.journalPrimaryAdmin}`;
                this.http.get(this.uploadUrl, {responseType: 'blob'}).subscribe(
                    (data: Blob) =>{
                        if (data.size !== 0) {
                            let reader = new FileReader();
                            reader.readAsDataURL(data);
                            reader.addEventListener("load", () => {
                            journal['userPic'] = this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
                            }, false);
                        }
                    }
                );
                this.upoadFlyerUrl = `http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journalFlyer/${journal.journalShortName}`;
                this.http.get(this.upoadFlyerUrl, {responseType: 'blob'}).subscribe(
                    (data: Blob) =>{
                        let reader = new FileReader();
                        if (data.size !== 0) {
                        reader.readAsDataURL(data);
                        reader.addEventListener("load", () => {       
                        journal['journalFlyer'] = this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
                        }, false);
                      }
                    }
                );
                this.uploadFlyerLogo = `http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journalLogo/${journal.journalShortName}`;
                if (!journal.journalFlyer) {
                    this.http.get(this.uploadFlyerLogo, {responseType: 'blob'}).subscribe(
                        (data: Blob) =>{
                            if (data.size !== 0) {
                                let reader = new FileReader();
                                reader.readAsDataURL(data);
                                reader.addEventListener("load", () => {
                                journal['flyerLogo'] = this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
                                }, false);
                            }
                        }
                    );
                }
               });
                this.dataAvailable = true;
            }
            this.loading = false;
        },
        err => {
            console.log(err);
        }
    )
    }

   
      createImageFromBlob(image: Blob) {
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.addEventListener("load", () => {
         
           return this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
           
        }, false);
     }

   
        showConfirm(): void {
            this.modalService.confirm({
              nzTitle: 'Confirm',
              nzContent: 'Are you sure you want to delete this journal?',
              nzOnOk: () => {
                this.http.delete(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journal/${this.selectedJournal}`).subscribe(
                    (resp: any) =>{
                        if (resp.status === 'Success') {
                           this.message.success(resp.message);
                           this.getJournalsList();
                        }
                    },
                    err => {
                        console.log(err);
                    }
                )
                this.isVisible = false;
              },
            nzOnCancel: () => {
                this.isVisible = false;
            }

            });
          }

          showModal(): void {
            this.isVisible = true;
          }
          validateJournal(e) 
          {
            if (e.code === 'Space') {
                this.invalidId = true;
                e.preventDefault();
               } else {
                   this.invalidId = false;
               }
          }
}