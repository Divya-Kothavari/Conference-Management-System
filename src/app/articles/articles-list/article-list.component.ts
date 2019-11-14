import { Component, TemplateRef, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { ProjectList } from '../../shared/interfaces/project-list.type';

import { environment } from '../../../environments/environment';


import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
    templateUrl: './article-list.component.html'
})

export class ArticleListComponent implements OnInit {

    view: string = 'cardView';
    newProject: boolean = false;
    // projectList: ProjectList[];
    journal: object;
    userroles = [];
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
    articleTitle;
    articleType;
    isLoading = false;
    editmode = false;
    journalmodal;
    visible: boolean = false;
    validateForm: FormGroup;
    listOfControl: Array<{ id: number; controlInstance: string }> = [];

    constructor(
        private fb: FormBuilder,
        private modalService: NzModalService, private http: HttpClient, private message: NzMessageService,
    ) { }

    ngOnInit(): void {

        this.journalForm = this.fb.group({
            journalName: [null, [Validators.required]],
            journalShortName: [null, [Validators.required]],
            journalEmail: [null, [Validators.email, Validators.required]],
            aboutJounal: [null, [Validators.required]],
            subject: [null, [Validators.required]],
            primayUser: [null, [Validators.required]],
        });
        this.validateForm = this.fb.group({});
        this.addField();
        let roles = window.localStorage.getItem('role');
        let currentUser = window.localStorage.getItem('userid');
        this.userroles = roles.split(',');
        if (this.userroles.includes('SuperAdmin') || this.userroles.includes('Admin')) {
            this.userroles = ['Admin', 'Author', 'Editor', 'Reviewer'];
        }
        // this.getJournalsList();

        // this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/subject`).subscribe(
        //     (resp: any) => {
        //         if (resp.status === 'Success') {
        //             resp.subjects.forEach(element => {
        //                 this.subjectsList.push(element.subjectName);
        //             });

        //         }
        //     },
        //     err => {
        //         console.log(err);
        //     }
        // );
        // this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/userMgmt/users/Admin`).subscribe(
        //     (resp: any) => {
        //         if (resp.status === 'Success') {
        //             this.adminsList = resp.userIds;
        //         }
        //     },
        //     err => {
        //         console.log(err);
        //     }
        // );

    }
    addField(e?: MouseEvent): void {
        if (e) {
          e.preventDefault();
        }
        const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;
    
        const control = {
          id,
          controlInstance: `passenger${id}`
        };
        const index = this.listOfControl.push(control);
        console.log(this.listOfControl[this.listOfControl.length - 1]);
        this.validateForm.addControl(
          this.listOfControl[index - 1].controlInstance,
          new FormControl(null, Validators.required)
        );
      }
      removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
        e.preventDefault();
        if (this.listOfControl.length > 1) {
          const index = this.listOfControl.indexOf(i);
          this.listOfControl.splice(index, 1);
          console.log(this.listOfControl);
          this.validateForm.removeControl(i.controlInstance);
        }
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
            (resp: any) => {
                this.isLoading = false;
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.http.post(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journalSubjects/${this.journalForm.value.journalShortName}/${this.journalForm.value.subject}`, {}).subscribe(
                        (resp: any) => {
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
    getJournalsList() {
        this.loading = true;
        this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journal`).subscribe(
            (resp: any) => {
                if (resp.status === 'Success') {
                    this.listOfAllJournals = resp.journals;
                    this.dataAvailable = true;
                }
                this.loading = false;
            },
            err => {
                console.log(err);
            }
        )
    }
    showConfirm(): void {
        this.modalService.confirm({
            nzTitle: 'Confirm',
            nzContent: 'Are you sure you want to delete this journal?',
            nzOnOk: () => {
                this.http.delete(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journal/${this.selectedJournal}`).subscribe(
                    (resp: any) => {
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
    validateJournal(e) {
        if (e.code === 'Space') {
            this.invalidId = true;
            e.preventDefault();
        } else {
            this.invalidId = false;
        }
    }

    openDrawer() {
        this.visible = true;
    }
    closeDrawer() {
        this.visible = false;
    }
}
