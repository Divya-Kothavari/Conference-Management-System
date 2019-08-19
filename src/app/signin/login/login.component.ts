import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    loginForm: FormGroup;
   isLoading = false;
    submitForm(): void {
        this.isLoading = true;
        for (const i in this.loginForm.controls) {
            this.loginForm.controls[ i ].markAsDirty();
            this.loginForm.controls[ i ].updateValueAndValidity();
        }        
        const userBean = {
            password: this.loginForm.value.password,
            userId:  this.loginForm.value.userName,
        };
        this.http.post(
            'http://localhost:8081/cmsusermgmt/userMgmt/login', userBean
        ).subscribe(
            (resp: any) =>{
              this.isLoading = false;
               if (resp.status === 'Error') {
                   this.message.error(resp.message);
               } else if (resp.status === 'Success') {
                  this.updateUser(resp.user);
                   window.localStorage.setItem('is_loggedin', 'true');
                   this.route.navigate(['/users/userslist']);
               }
            },
            err => {
                this.isLoading = false;
               this.message.error(err);
            }
        )
    }

    constructor(private fb: FormBuilder, private http: HttpClient, private route: Router, 
        private message: NzMessageService,
        private commonService: CommonService) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            userName: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ]
        });
        this.commonService.userData.subscribe(data =>{
            console.log(data);
        });
    }
    private updateUser(user) {
        this.commonService.updateUserData(user);
    }
}    