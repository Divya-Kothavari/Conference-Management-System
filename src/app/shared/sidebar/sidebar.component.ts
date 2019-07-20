import { Component, OnInit, TemplateRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../core/services/common.service';
@Component({
  selector: 'cms-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  orgLogo;
  isCollapsed;
  triggerTemplate: TemplateRef<void> | null = null;
  @ViewChild('trigger', {static: false}) customTrigger: TemplateRef<void>;
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  constructor(public router: Router,
              private route: ActivatedRoute,
              private commonService: CommonService) {
                this.commonService.isCollapsed.subscribe(
                  resp => {
                    this.isCollapsed = resp;
                  }
                );
              }

  ngOnInit() {
    const localStorageData = JSON.parse(window.localStorage.getItem('org_details'));
    if (localStorageData && localStorageData.Domain.logo_uri) {
      this.orgLogo = localStorageData.Domain.logo_uri;
    } else {
      this.orgLogo = '../../../assets/images/logo.png';
    }
  }
  stateChanged() {
    this.isCollapsed = !this.isCollapsed;
    this.commonService.isCollapsed.next(this.isCollapsed);
  }
}
