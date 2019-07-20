import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { JwtService } from '../../core/services/jwt.service';
import { Router } from '@angular/router';
import { CommonService } from '../../core/services/common.service';
@Component({
  selector: 'cms-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {
  username;
  orgName;
  orgId;
  orgLogo;
  isCollapsed;

  constructor(private jwtService: JwtService,
              private router: Router,
              private commonService: CommonService) {
                this.commonService.isCollapsed.subscribe(
                  resp => {
                    this.isCollapsed = resp;
                  }
                )
              }

  ngOnInit() {
    this.username = JSON.parse(window.localStorage.getItem('user_details')).displayname;
    const localStorageData = JSON.parse(window.localStorage.getItem('org_details'));
    if (localStorageData && localStorageData.Domain.logo_uri) {
      this.orgLogo = localStorageData.Domain.logo_uri;
    } else {
      this.orgLogo = '../../../assets/images/logo.png';
    }
    if (localStorageData && localStorageData.Domain.displayname) {
      this.orgName = localStorageData.Domain.displayname;
    }
  }
  logOut() {
    this.jwtService.logout_clear_storage();
    this.router.navigate(['/']);
  }
}
