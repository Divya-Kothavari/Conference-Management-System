import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../shared/services/table.service';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
    templateUrl: './orders-list.component.html'
})



export class OrdersListComponent implements OnInit {

    allChecked: boolean = false;
    indeterminate: boolean = false;
    search : any;
    displayData = [];
    loading = false;
    pageSize = 5;
    pageIndex = 1;

    constructor(private tableSvc : TableService, private http: HttpClient, private message: NzMessageService) { }

    ngOnInit(){
            this.getUsersList();
        }
    
    getUsersList(){
        this.loading = true;
        this.http.get('http://localhost:8081/cmsusermgmt/userMgmt/users').subscribe(
        (resp: any) =>{
            if (resp.status === 'Success') {
                this.displayData = resp.users;
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
        const allChecked = this.displayData.every(value => value.checked === true);
        const allUnChecked = this.displayData.every(value => !value.checked);
        this.allChecked = allChecked;
        this.indeterminate = (!allChecked) && (!allUnChecked);
    }

    checkAll(value: boolean): void {
        this.displayData.forEach(data => {
            data.checked = value;
        });
        this.refreshStatus();
    }


} 