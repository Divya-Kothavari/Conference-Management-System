import { Component, OnInit } from '@angular/core';
import { MenudataService } from 'src/app/shared/services/menudata.service';
import { OrgMenu } from '../header/org-menu.model';
@Component({
  selector: 'app-open-access',
  templateUrl: './open-access.component.html',
  styleUrls: ['./open-access.component.scss']
})
export class OpenAccessComponent implements OnInit {
  menuList: OrgMenu[] = [];
  homedesc;
  homecontent;
  constructor(private data: MenudataService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.data.currentMessage.subscribe(
      (value) => {
        this.menuList = value;
        this.menuList.forEach(memu => {
          if (memu.menuLink === 'open-access') {
             this.homedesc = memu.menuDescription;
             this.homecontent = memu.menuContent;
          }
        });
      }
    );
  }

}
