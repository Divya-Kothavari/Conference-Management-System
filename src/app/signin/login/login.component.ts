import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';
 
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;
const portUsermgmt = environment.portUsermgmt;
const portJournalmgmt = environment.portJournalmgmt;
const portLocations = environment.portLocations;
@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    loginForm: FormGroup;
    signupForm: FormGroup;
   isLoading = false;
   isLoading1 = false;
   listofregions = [];
   listofcountries = [];
   listofroles = [];
   listofsubjects = [];
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
                   window.localStorage.setItem('user', resp.user.userName);
                   window.localStorage.setItem('role', resp.user.roles);
                   window.localStorage.setItem('userid', resp.user.userId);
                   this.route.navigate(['/users']);
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
        this.getRegionsList();
        this.getCountriesList();
        this.getRolesList();
        this.getSubjectsList();

        this.loginForm = this.fb.group({
            userName: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ]
        });
        this.signupForm = this.fb.group({
            userId: [ null, [ Validators.required ] ],
            userName: [ null, [ Validators.required ] ],
            email: [ null, [Validators.email, Validators.required] ],
            phoneNumber:  [ null, [ Validators.required ] ],
            region:  [ null, [ Validators.required ] ],
            country:  [ null, [ Validators.required ] ],
            interestedSubjects :  [ null, [ Validators.required ] ],
            insteresedAs:  [ null, [ Validators.required ] ],
            captcha: [null, [Validators.required]],
            agree: [false]
        });
        this.commonService.userData.subscribe(data =>{
            console.log(data);
        });
    }
    private updateUser(user) {
        this.commonService.updateUserData(user);
    }

    submitSignup() {
        for (const i in this.signupForm.controls) {
            this.signupForm.controls[ i ].markAsDirty();
            this.signupForm.controls[ i ].updateValueAndValidity();
        }  
    }
    getRolesList(){
        this.http.get(`${apiUrl}${portUsermgmt}/cmsusermgmt/userMgmt/role`).subscribe(
        (resp: any) =>{
            if (resp.status === 'Success') {
                this.listofroles = [];
                resp.roles.forEach(element => {
                    this.listofroles.push(element.roleName);
                });
            }
        },
        err => {
            console.log(err);
        }
    )
    }
    getSubjectsList() {
        this.http.get(`${apiUrl}${portJournalmgmt}/cmsjournalmgmt/subject`).subscribe(
        (resp: any) =>{
            if (resp.status === 'Success') {
                this.listofsubjects = [];
                resp.subjects.forEach(element => {
                    this.listofsubjects.push(element.subjectName);
                });
            }
                   },
        err => {
            console.log(err);
        }
    )
    }

    getRegionsList() {
        this.http.get(`${apiUrl}${portLocations}/cmslocations/locations/region`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                this.listofregions = [];
                resp.regions.forEach(element => {
                    this.listofregions.push(element.regionName);
                });
            }
            },
            err => {
                console.log(err);
            }
    )
    }

    getCountriesList() {
        this.http.get(`${apiUrl}${portLocations}/cmslocations/locations/country`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    this.listofcountries = [];
                    resp.countries.forEach(element => {
                        this.listofcountries.push(element.countryName)
                    });
                }
            },
            err => {
                console.log(err);
            }
    )
    }
}    