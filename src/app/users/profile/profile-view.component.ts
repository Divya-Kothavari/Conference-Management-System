import { Component } from '@angular/core';
import { UploadFile } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { UploadXHRArgs } from 'ng-zorro-antd/upload';
import { environment } from '../../../environments/environment';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
 

@Component({
    templateUrl: './profile-view.component.html'
})

export class ProfileViewComponent {
    changePWForm: FormGroup;
    uploadUserPath: string = "http://themenate.com/applicator/dist/assets/images/avatars/thumb-13.jpg";
    selectedCountry: any;
    selectedLanguage: any;
    user;
    username;
    userid;
    role;
    userDetails;
    uploadUrl;
    rolesList =[];
    selectedRole = [];
    isLoading = false;
    skeletonLoading = false;
    dataAvailable = false;
    imageToShow: any;

    networkList = [
        {
            name: 'Facebook',
            icon: 'facebook',
            avatarColor: '#4267b1',
            avatarBg: 'rgba(66, 103, 177, 0.1)',
            status: true,
            link: 'https://facebook.com'
        },
        {
            name: 'Instagram',
            icon: 'instagram',
            avatarColor: '#fff',
            avatarBg: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
            status: false,
            link: 'https://instagram.com'
        },
        {
            name: 'Twitter',
            icon: 'twitter',
            avatarColor: '#1ca1f2',
            avatarBg: 'rgba(28, 161, 242, 0.1)',
            status: true,
            link: 'https://twitter.com'
        },
        {
            name: 'Dribbble',
            icon: 'dribbble',
            avatarColor: '#d8487e',
            avatarBg: 'rgba(216, 72, 126, 0.1)',
            status: false,
            link: 'https://dribbble.com'
        },
        {
            name: 'Github',
            icon: 'github',
            avatarColor: '#323131',
            avatarBg: 'rgba(50, 49, 49, 0.1)',
            status: true,
            link: 'https://github.com'
        },
        {
            name: 'Linkedin',
            icon: 'linkedin',
            avatarColor: '#0174af',
            avatarBg: 'rgba(1, 116, 175, 0.1)',
            status: true,
            link: 'https://linkedin.com'
        },
        {
            name: 'Dropbox',
            icon: 'dropbox',
            avatarColor: '#005ef7',
            avatarBg: 'rgba(0, 94, 247, 0.1)',
            status: false,
            link: 'https://dropbox.com'
        }
    ];
    notificationConfigList = [
        {
            title: "Everyone can look me up",
            desc: "Allow people found on your public.",
            icon: "user",
            color: "ant-avatar-blue",
            status: true
        },
        {
            title: "Everyone can contact me",
            desc: "Allow any peole to contact.",
            icon: "mobile",
            color: "ant-avatar-cyan",
            status: true
        },
        {
            title: "Show my location",
            desc: "Turning on Location lets you explore what's around you.",
            icon: "environment",
            color: "ant-avatar-gold",
            status: false
        },
        {
            title: "Email Notifications",
            desc: "Receive daily email notifications.",
            icon: "mail",
            color: "ant-avatar-purple",
            status: true
        },
        {
            title: "Unknow Source ",
            desc: "Allow all downloads from unknow source.",
            icon: "question",
            color: "ant-avatar-red",
            status: false
        },
        {
            title: "Data Synchronization",
            desc: "Allow data synchronize with cloud server",
            icon: "swap",
            color: "ant-avatar-green",
            status: true
        },
        {
            title: "Groups Invitation",
            desc: "Allow any groups invitation",
            icon: "usergroup-add",
            color: "ant-avatar-orange",
            status: true
        },
    ]
 
    constructor(private fb: FormBuilder, 
        private modalService: NzModalService, 
        private message: NzMessageService,
        private http: HttpClient,
        private route: ActivatedRoute,
         private sanitizer : DomSanitizer) {
            this.route.params.subscribe( params => {
               this.userid = params.id;
            } );
    }

    ngOnInit(): void {
         //get user by id
        this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/userMgmt/user/${this.userid}`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    //console.log(resp.user);
                   this.userDetails = resp.user;
                   this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/userMgmt/userRoles/${this.userDetails.userId}`).subscribe(
                    (resp: any) =>{
                        if (resp.status === 'Success') {
                           this.selectedRole = resp.userRoles.roles.split(',');
                        }
                    },
                    err => {
                        console.log(err);
                    }
                );
                this.dataAvailable = true;
                this.uploadUrl = 
                `http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/userMgmt/user/profileImage/${this.userDetails.userId}`;
                this.getImageFromService();
                }
            },
            err => {
                 console.log(err);
            }
        );
        this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/userMgmt/role`).subscribe(
            (resp: any) =>{
                if (resp.status === 'Success') {
                    resp.roles.forEach(role => {
                        if (role.roleName !== 'SuperAdmin') {
                            this.rolesList.push(role.roleName);
                        }
                    });
                }
            },
            err => {
                console.log(err);
            }
        );
        

    }

    getImageFromService() {
        this.getImage(this.uploadUrl).subscribe(data => {
          this.createImageFromBlob(data);
        }, error => {
          console.log(error);
        });
    }
    getImage(imageUrl: string): Observable<Blob> {
        return this.http.get(this.uploadUrl, { responseType: 'blob' });
      }
      createImageFromBlob(image: Blob) {
        if (image.size !== 0) {
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.addEventListener("load", () => {
           this.imageToShow = this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
                }, false);
    }
     }

}    