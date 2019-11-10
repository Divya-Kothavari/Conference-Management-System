import { Component, OnInit } from '@angular/core';
import { MenudataService } from 'src/app/shared/services/menudata.service';
import { OrgMenu } from '../header/org-menu.model';
@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss']
})
export class GuidelinesComponent implements OnInit {
  menuList: OrgMenu[] = [];
  aboutdesc;
  aboutcontent;
  constructor(private data: MenudataService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.data.currentMessage.subscribe(
      (value) => {
        this.menuList = value;
        this.menuList.forEach(memu => {
          if (memu.menuLink === "guidelines") {
             this.aboutdesc = memu.menuDescription;
             this.aboutcontent = memu.menuContent;
          }
        });
      }
    );
  }

}
