import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NzModalService } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
    templateUrl: './changepassword.component.html'
})

export class ChangepasswordComponent implements OnInit {
    changePWForm: FormGroup;

userdata;
    constructor(private fb: FormBuilder, private http: HttpClient, private modalService: NzModalService,private message: NzMessageService, ) { }

    ngOnInit(){
        this.changePWForm = this.fb.group({
            oldPassword: [ null, [ Validators.required ] ],
            newPassword: [ null, [ Validators.required ] ],
            confirmPassword: [ null, [ Validators.required ] ]
        });
        this.userdata = window.localStorage.getItem('user');
       
    }
    submitForm(): void {
        for (const i in this.changePWForm.controls) {
            this.changePWForm.controls[ i ].markAsDirty();
            this.changePWForm.controls[ i ].updateValueAndValidity();
        }

        this.showConfirm();
    }
    showConfirm(): void {
        this.modalService.confirm({
            nzTitle  : '<i>Do you want to change your password?</i>',
            nzOnOk   : () => 
            {
                const data = {
                    cPassword: this.changePWForm.value.oldPassword,
                    nPassword: this.changePWForm.value.newPassword,
                    nPasswordConf: this.changePWForm.value.confirmPassword,
                    userId: this.userdata
                }
                this.http.post('http://localhost:8081/cmsusermgmt/userMgmt/passwordReset', data).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    console.log(resp);
                }
            },
            err => {
                console.log(err);
            }
        )
                this.message.success('Password Change Successfully');
            }
        });
    }

}  