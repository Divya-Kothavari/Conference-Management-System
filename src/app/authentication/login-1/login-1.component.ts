import { Component } from '@angular/core'
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
    templateUrl: './login-1.component.html'
})

export class Login1Component {
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
                this.route.navigate(['/apps/e-commerce/orders-list']);
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