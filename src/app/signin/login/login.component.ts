import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';


@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    loginForm: FormGroup;

    submitForm(): void {
        for (const i in this.loginForm.controls) {
            this.loginForm.controls[ i ].markAsDirty();
            this.loginForm.controls[ i ].updateValueAndValidity();
        }
        console.log(this.loginForm.value);
        
        const userBean = {
            password: this.loginForm.value.password,
            userId:  this.loginForm.value.userName,
        };
        console.log(userBean);
        this.http.post(
            'http://localhost:8081/cmsusermgmt/userMgmt/login', userBean
        ).subscribe(
            (resp: any) =>{
                console.log(resp);
                window.localStorage.setItem('user', resp.user.userId);
                this.route.navigate(['/users/userslist']);
            },
            err => {
                console.log(err);
            }
        )
    }

    constructor(private fb: FormBuilder, private http: HttpClient, private route: Router) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            userName: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ]
        });
    }
}    