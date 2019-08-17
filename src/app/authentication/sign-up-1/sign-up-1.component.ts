import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';


@Component({
    templateUrl: './sign-up-1.component.html'
})

export class SignUp1Component {

    signUpForm: FormGroup;

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
            status: true,
        };
        console.log(userBean);
        this.http.post(
            'http://localhost:8081/cmsusermgmt/userMgmt/user', userBean
        ).subscribe(
            (resp: any) =>{
                console.log(resp);
                if(resp.status == 'Success'){
                    this.message.success(resp.message);
                    this.route.navigate(['/apps/e-commerce/orders-list']);
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

    constructor(private fb: FormBuilder, private http: HttpClient, private message: NzMessageService, private route: Router) {
    }

    ngOnInit(): void {
        this.signUpForm = this.fb.group({
            userId           : [ null, [ Validators.required ] ],
            userName         : [ null, [ Validators.required ] ],
            email            : [ null, [ Validators.required ] ],
            password         : [ null, [ Validators.required ] ],
            checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
            agree            : [ false ]
        });
    }
}    