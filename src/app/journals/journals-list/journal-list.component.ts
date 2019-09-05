import { Component, TemplateRef } from '@angular/core';
import { AppsService } from '../../shared/services/apps.service';
import { NzModalService } from 'ng-zorro-antd';
import { ProjectList } from '../../shared/interfaces/project-list.type';

import { environment } from '../../../environments/environment';


import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { CommonService } from 'src/app/shared/services/common.service';

const apiUrl = environment.apiUrl;
const portUsermgmt = environment.portUsermgmt;
const portJournalmgmt = environment.portJournalmgmt;


@Component({
    templateUrl: './journal-list.component.html'
})

export class JournalListComponent  {

    view: string = 'cardView';
    newProject: boolean = false;
    // projectList: ProjectList[];
    journal: object;
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

    constructor (private projectListSvc: AppsService, private modalService: NzModalService, private http: HttpClient, private message: NzMessageService,
        private commonService: CommonService) {}

    ngOnInit(): void {
        // this.projectListSvc.getProjectListJson().subscribe(data => {
        //     this.listOfAllJournals = data;
        // })

        this.getJournalsList();
        // this.commonService.userData.subscribe(data =>{
        //     this.journal = data;
        // });

        this.http.get(`${apiUrl}${portJournalmgmt}/cmsjournalmgmt/subject`).subscribe(
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
        this.http.get(`${apiUrl}${portUsermgmt}/cmsusermgmt/userMgmt/users/Admin`).subscribe(
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

    showNewProject(newProjectContent: TemplateRef<{}>) {
        const modal = this.modalService.create({
            nzTitle: 'Create New Journal',
            nzContent: newProjectContent,
            nzFooter: [
                {
                    label: 'Create Journal',
                    type: 'primary',
                    onClick: () => this.modalService.confirm(
                        { 
                            nzTitle: 'Are you sure you want to create this Journal?',
                            nzOnOk: () => this.modalService.closeAll()
                        }
                    )
                },
            ],
            nzWidth: 800
        })    
    }

    addJournal() {
        if (this.editmode) {
            this.isLoading = true;
            const role = {
                journalName: this.subjectForm.value.journalName,
                journalShortName: this.subjectForm.value.journalShortName,
                
            }
            this.http.put(`${apiUrl}${portUsermgmt}/cmsusermgmt/userMgmt/role`, role).subscribe(
            (resp: any) =>{
                this.isLoading = false;
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.handleCancel();
                    this.editmode = false;
                }
            },
            err => {
                console.log(err);
            }
        )
        } else {
            this.isLoading = true;
            const role = {
                roleName: this.subjectForm.value.roleName,
                roleDescription: this.subjectForm.value.roleDescription
            }
            this.http.post(`${apiUrl}${portUsermgmt}/cmsusermgmt/userMgmt/role`, role).subscribe(
            (resp: any) =>{
                this.isLoading = false;
                if (resp.status === 'Success') {
                    this.message.success(resp.message);
                    this.handleCancel();
                 }
                if (resp.status === 'Error') {
                    this.message.error(resp.message);
                    this.handleCancel();
                 }
            },
            err => {
                console.log(err);
            }
        )
        }
    }

    

    getJournalsList(){
        this.loading = true;
        this.http.get(`${apiUrl}${portJournalmgmt}/cmsjournalmgmt/journal`).subscribe(
        (resp: any) =>{
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
              nzOkText: 'OK',
              nzCancelText: 'Cancel'
            });
          }
          handleOk(): void {
            this.http.delete(`${apiUrl}${portJournalmgmt}/cmsjournalmgmt/journal/${this.selectedJournal}`).subscribe(
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
          }
        
          handleCancel(): void {
            this.isVisible = false;
          }

          showModal(): void {
            this.isVisible = true;
          }
}