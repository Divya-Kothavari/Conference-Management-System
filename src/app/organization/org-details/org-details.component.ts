import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
 
import { OrgMenu } from './org-menu.model'; 
import { SortablejsOptions } from 'ngx-sortablejs';

@Component({
  selector: 'app-org-details',
  templateUrl: './org-details.component.html',
  styleUrls: ['./org-details.component.css']
})
export class OrgDetailsComponent implements OnInit {
  editMode = false;
  isLoading= false;
  currentmenuId;
  currentmenuParentId;
  currentmenuLevel;
  dataAvailable = false;
  menuContent;
  menuList: OrgMenu[] = [];
  active:boolean = true;
  isVisible: boolean = false;
  menuForm: FormGroup;
  editorConfig = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],  
        [{ 'align': [] }],
        ['link', 'image']                        
    ]
};
options: SortablejsOptions = {
  group: 'test',
  onUpdate: () => {
    console.log('updated');
  },
  onAdd: ($event) => {
    console.log('added', $event);
    const movedItemId = $event.item.id;
    // menu moved to submenu
    if (movedItemId[0] === 'm') {
      let id = parseInt(movedItemId[4]);
      let pid = parseInt(movedItemId[5]);
      let level = parseInt(movedItemId[6]);
       this.menuList.forEach(menu => {
         menu.submenuList.forEach(submenu => {
          if (submenu.id === id) {
            const data = {
              menuName: submenu.menuName,
              menuLink: submenu.menuLink,
              menuDescription: submenu.menuDescription,
              menuStatus: submenu.menuStatus,
              id: submenu.id,
              menuParentId: menu.id,
              menuLevel: menu.menuLevel
            };
            this.http.put(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/orgmgmt/orgMenu/`, data).subscribe(
              (resp: any) => {
                  this.isLoading = false;
                  if (resp.status === 'Success') {
                      this.message.success(resp.message);
                  }
              },
              err => {
                  console.log(err);
              }
          );
          }
         });
      });
    }
    console.log(this.menuList);
  },
  onRemove: ($event) => {
    console.log('removed', $event);
    console.log(this.menuList);
  },
};
  constructor(private fb: FormBuilder, private http: HttpClient, private route: Router, 
    private message: NzMessageService) { }

  ngOnInit() {
    this.menuForm = this.fb.group({
      MenuName: [ {value: null, disabled: this.editMode}, [ Validators.required ] ],
      menuLink: [  {value: null, disabled: this.editMode}, [ Validators.required ] ],
      menuDescription: [ null, [ Validators.required ] ],
      menuContent: [ null, [ Validators.required ] ],
      status:  [ null, [ Validators.required ] ]
  });
   this.getMenuList();
  }

getMenuList() {
  this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/orgmgmt/orgMenu/`).subscribe(
    (resp: any) => {
        if (resp.status === 'Success') {
           this.menuList = [];
           const orgId = [];
           resp.orgMenus.forEach(menu => {
             orgId.push(menu.id);
           });
            resp.orgMenus.forEach(menu => {
              this.menuList.push({
                menuDescription: menu.menuDescription,
                menuLevel: menu.menuLevel,
                menuLink: menu.menuLink,
                menuName: menu.menuName,
                menuParentId: menu.menuParentId,
                menuStatus: menu.menuStatus,
                menuContent: menu.menuContent,
                id: menu.id,
                submenuList: []
              });
            });
            const childmenulist = [];
            this.menuList.forEach((menu, index) => {
              if (menu.menuParentId !== menu.id) {
                let mindex = orgId.findIndex(fruit => fruit === menu.menuParentId);
                this.menuList[mindex].submenuList.push(menu);
                childmenulist.push(index);
              }
            });
            childmenulist.forEach(list => {
              this.menuList.splice(list, 1);
            });
            console.log(this.menuList);
            this.dataAvailable = true;
            this.message.success(resp.message);
        }
    },
    err => {
        console.log(err);
    }
);
}
  editMenu(menuData) {
    this.menuForm.controls['MenuName'].setValue(menuData.menuName);
    this.menuForm.controls['menuLink'].setValue(menuData.menuLink);
    this.menuForm.controls['menuDescription'].setValue(menuData.menuDescription);
    this.menuForm.controls['menuContent'].setValue(menuData.menuContent);
    this.menuForm.controls['status'].setValue(menuData.menuStatus);
    this.currentmenuId = menuData.id;
    this.currentmenuParentId = menuData.menuParentId;
    this.editMode = true;
    this.isVisible = true;
  }

  openMenuPopup() {
    this.isVisible = true;
  }
  

  addMenu() {
    if (this.editMode) {
        this.isLoading = true;
        const menu = {
          menuName: this.menuForm.value.MenuName,
          menuLink: this.menuForm.value.menuLink,
          menuDescription: this.menuForm.value.menuDescription,
          menuStatus: this.menuForm.value.status,
          menuContent: this.menuForm.value.menuContent,
          id: this.currentmenuId,
          menuLevel: 0,
          menuParentId: this.currentmenuParentId
        }
        this.http.put(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/orgmgmt/orgMenu/`, menu).subscribe(
        (resp: any) =>{
            this.isLoading = false;
            if (resp.status === 'Success') {
                this.message.success(resp.message);
                this.handleCancel();
                this.editMode = false;
                this.getMenuList();
                this.menuForm.reset();
            }
        },
        err => {
            console.log(err);
        }
    );
    } else {
        this.isLoading = true;
        const menu = {
          menuName: this.menuForm.value.MenuName,
          menuLink: this.menuForm.value.menuLink,
          menuDescription: this.menuForm.value.menuDescription,
          menuStatus: this.menuForm.value.status,
          menuContent: this.menuForm.value.menuContent,
          id: 0,
          menuParentId: 0,
          menuLevel: 0
        }
        this.http.post(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/orgmgmt/orgMenu/`, menu).subscribe(
        (resp: any) =>{
            this.isLoading = false;
            if (resp.status === 'Success') {
                this.message.success(resp.message);
                this.handleCancel();
                this.getMenuList();
            }
            if (resp.status === 'Error') {
                this.message.error(resp.message);
                this.handleCancel();
            }
            this.menuForm.reset();
        },
        err => {
            console.log(err);
        }
    )
    }
}


  handleCancel(): void {
    //console.log('Button cancel clicked!');
    this.isVisible = false;
    this.menuForm.reset();
  }
  
  deleteMenu(menuData) {
    this.http.delete(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/orgmgmt/orgMenu/${menuData.id}`).subscribe(
      (resp: any) =>{
          this.isLoading = false;
          if (resp.status === 'Success') {
              this.message.success(resp.message);
              this.getMenuList();
          }
          if (resp.status === 'Error') {
              this.message.error(resp.message);
          }
      },
      err => {
          console.log(err);
      }
  )
  }
}
