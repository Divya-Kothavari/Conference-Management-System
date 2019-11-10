import { Component, OnInit } from '@angular/core';
import { MenudataService } from 'src/app/shared/services/menudata.service';
import { OrgMenu } from '../../header/org-menu.model';
@Component({
  selector: 'app-editor-guidelines',
  templateUrl: './editor-guidelines.component.html',
  styleUrls: ['./editor-guidelines.component.scss']
})
export class EditorGuidelinesComponent implements OnInit {
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
          if (memu.menuLink === 'guidelines') {
            memu.submenuList.forEach(submenu => {
              if (submenu.menuLink === 'editor-guidelines') {
                this.aboutdesc = submenu.menuDescription;
                this.aboutcontent = submenu.menuContent;
              }
            });
          }
        });
      }
    );
  }

}
