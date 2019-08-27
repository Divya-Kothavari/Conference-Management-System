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
       
    }

    showNewProject(newProjectContent: TemplateRef<{}>) {
        const modal = this.modalService.create({
            nzTitle: 'Create New Project',
            nzContent: newProjectContent,
            nzFooter: [
                {
                    label: 'Create Project',
                    type: 'primary',
                    onClick: () => this.modalService.confirm(
                        { 
                            nzTitle: 'Are you sure you want to create this project?',
                            nzOnOk: () => this.modalService.closeAll()
                        }
                    )
                },
            ],
            nzWidth: 800
        })    
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