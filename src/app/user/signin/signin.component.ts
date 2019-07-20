import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { JwtService } from '../../core/services/jwt.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'cms-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SigninComponent implements OnInit {

  passwordVisible = false;
  passwordVisibleSingup = false;
  passwordVisibleConfirm = false;
  password: string;
  login: any;
  loginList: any;
  auname: string;
  apassword: any;
  jsonURL = 'assets/authenticate.json';
  validateForm: FormGroup;
  signupValidateForm: FormGroup;
  showError = false;
  errMessage: string;
  errDescription: string;
  isLoadingOne = false;
  usersData: any;
  doaminDetails = {
    domainUrl: '',
    domainid: ''
  };
  loggedIn;

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private jwtService: JwtService,
              private message: NzMessageService
              ) {
     }

     ngOnInit() {
        this.loggedIn = window.localStorage.is_loggedin;
        if ( window.localStorage.is_loggedin !== undefined && window.localStorage.is_loggedin === 'true' ) {
         this.router.navigate(['/dashboard']);
       }
        this.validateForm = this.fb.group({
      //  userName: [null, [Validators.email, Validators.required]],
         userName: [null, [Validators.required]],
         password: [null, [Validators.required]],
         remember: [true]
      });
        this.signupValidateForm = this.fb.group({
        passwordSignup: [null, [Validators.required]],
        firstName: [null, [Validators.required]],
        userEmail: [null, [Validators.email, Validators.required]],
        checkPassword: [null, [Validators.required, this.confirmationValidator]]
     });
    }

    submitForm() {
      const username = this.validateForm.controls.userName.value;
      const password = this.validateForm.controls.password.value;
// tslint:disable-next-line: forin
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }

      if (this.validateForm.valid) {
        this.isLoadingOne = true;
        const data = {
          username,
          password
        };
        this.userService.loginUser(data).subscribe(
          resp => {
            this.isLoadingOne = false;
            if (resp.status === 'failed') {
              this.message.create('error', resp.message);
            } else {
              window.localStorage.setItem('is_loggedin', 'true');
              this.jwtService.saveToken(resp.data.access_token);
              window.localStorage.setItem('user_details', JSON.stringify(resp.data));
              this.router.navigate(['/dashboard']);
            }
          }
        );

      }

    }

    signupSubmitForm() {
      const firstName = this.signupValidateForm.controls.firstName.value;
      const userEmail = this.signupValidateForm.controls.userEmail.value;
      const passwordSignup = this.signupValidateForm.controls.passwordSignup.value;
      const checkPassword = this.signupValidateForm.controls.checkPassword.value;
  // tslint:disable-next-line: forin
      for (const i in this.signupValidateForm.controls) {
        this.signupValidateForm.controls[i].markAsDirty();
        this.signupValidateForm.controls[i].updateValueAndValidity();
      }
    }

    updateConfirmValidator(): void {
      /** wait for refresh value */
      Promise.resolve().then(() => this.signupValidateForm.controls.checkPassword.updateValueAndValidity());
    }

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
      if (!control.value) {
        return { required: true };
      } else if (control.value !== this.signupValidateForm.controls.passwordSignup.value) {
        return { confirm: true, error: true };
      }
      return {};
    }
}
