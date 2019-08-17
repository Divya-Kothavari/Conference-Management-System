import { Component, OnInit } from '@angular/core';
import { TableService } from '../../shared/services/table.service';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';


@Component({
    templateUrl: './users-list.component.html'
})



export class UsersListComponent implements OnInit {

    allChecked: boolean = false;
    indeterminate: boolean = false;
    search : any;
     displayData = [];
    listOfAllData = [];
    mapOfCheckedId: { [key: string]: boolean } = {};
    loading = false;
    pageSize = 5;
    pageIndex = 1;
    numberOfChecked = 0;

    constructor(private tableSvc : TableService, private http: HttpClient, private message: NzMessageService) { }

    ngOnInit(){
            this.getUsersList();
        }
    
    getUsersList(){
        this.loading = true;
        this.http.get('http://localhost:8081/cmsusermgmt/userMgmt/users').subscribe(
        (resp: any) =>{
            if (resp.status === 'Success') {
                this.listOfAllData = resp.users;
            }
            this.loading = false;
        },
        err => {
            console.log(err);
        }
    )
    }
   
    

    deleteUser(userId){
        this.http.delete(`http://localhost:8081/cmsusermgmt/userMgmt/user/${userId}`).subscribe(
            (resp: any) =>{
                
                if(resp.status == 'Success'){
                    this.message.success(resp.message);
                }
                
                this.getUsersList();
             },
            err => {
                this.message.error(err);
                console.log(err);
            }
        )
    }

    sort(sortAttribute: any) {
        this.displayData = this.tableSvc.sort(sortAttribute, this.displayData);
    }

    currentPageDataChange($event: Array<{ 
        id: number; 
        name: string;
        avatar: string;
        date: string;
        amount: number;
        status: string;
        checked: boolean; 
    }>): void {
        this.displayData = $event;
        this.refreshStatus();
    }

    refreshStatus(): void {
        this.allChecked = this.displayData
          .filter(item => !item.disabled)
          .every(item => this.mapOfCheckedId[item.id]);
        this.indeterminate =
          this.displayData.filter(item => !item.disabled).some(item => this.mapOfCheckedId[item.id]) &&
          !this.allChecked;
        this.numberOfChecked = this.listOfAllData.filter(item => this.mapOfCheckedId[item.id]).length;
      }

      checkAll(value: boolean): void {
        this.displayData.filter(item => !item.disabled).forEach(item => (this.mapOfCheckedId[item.id] = value));
        this.refreshStatus();
      }


} 