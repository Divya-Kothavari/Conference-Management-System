import { Component, OnInit } from '@angular/core';
import { TableService } from '../../shared/services/table.service';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';


@Component({
    templateUrl: './users-list.component.html'
})



export class UsersListComponent implements OnInit {
    isVisible:boolean = false;
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
    user;
    signUpForm: FormGroup;

    constructor(private tableSvc : TableService, private fb: FormBuilder, private http: HttpClient, private message: NzMessageService,
        private commonService: CommonService) { }

    ngOnInit(){
            this.getUsersList();
            this.commonService.userData.subscribe(data =>{
                this.user = data;
            });
            this.signUpForm = this.fb.group({
                userId           : [ null, [ Validators.required ] ],
                userName         : [ null, [ Validators.required ] ],
                email            : [ null, [ Validators.required ] ],
                password         : [ null, [ Validators.required ] ],
                checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
                agree            : [ false ]
            });
        }
    cancel() {
        //
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

      handleCancel() {
          this.isVisible = false;
          this.signUpForm.reset();
      }
     
    submitForm(): void {
        for (const i in this.signUpForm.controls) {
            this.signUpForm.controls[ i ].markAsDirty();
            this.signUpForm.controls[ i ].updateValueAndValidity();
        }
        const userBean = {
            userId:  this.signUpForm.value.userId,
            userName: this.signUpForm.value.userName,
            email: this.signUpForm.value.email,
            password: this.signUpForm.value.password,
            status: true
        };
        console.log(userBean);
        this.http.post(
            'http://localhost:8081/cmsusermgmt/userMgmt/user', userBean
        ).subscribe(
            (resp: any) =>{
                console.log(resp);
                if(resp.status == 'Success'){
                    this.message.success(resp.message);
                    this.isVisible = false;
                    this.getUsersList();
                }
                if(resp.status == 'Error'){
                    this.message.error(resp.errorMessage);
                }
                this.signUpForm.reset()
             },
            err => {
                console.log(err);
            }
        )
    }

    updateConfirmValidator(): void {
        Promise.resolve().then(() => this.signUpForm.controls.checkPassword.updateValueAndValidity());
    }

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (control.value !== this.signUpForm.controls.password.value) {
            return { confirm: true, error: true };
        }
    }
} 