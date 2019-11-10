import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OrgMenu } from './org-menu.model';
import { MenudataService } from 'src/app/shared/services/menudata.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  menuList: OrgMenu[] = [];

  constructor(private http: HttpClient, private route: Router, private data: MenudataService) { }

  ngOnInit() {
    this.getMenuList();
    if ($('.main-nav').length) {
      let $mobile_nav = $('.main-nav').clone().prop({
        class: 'mobile-nav d-lg-none'
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>');
      $('body').append('<div class="mobile-nav-overly"></div>');
    }  else if ($('.mobile-nav, .mobile-nav-toggle').length) {
      $('.mobile-nav, .mobile-nav-toggle').hide();
    }
  }

  ngAfterViewInit() {
    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      let container = $('.mobile-nav, .mobile-nav-toggle');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
      } else {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('active');
      }
    });
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
                  const mindex = orgId.findIndex(fruit => fruit === menu.menuParentId);
                  this.menuList[mindex].submenuList.push(menu);
                  childmenulist.push(menu.id);
                }
              });
             childmenulist.forEach(list => {
                let mindex = this.menuList.findIndex(fruit => fruit.id === list);
                this.menuList.splice(mindex, 1);
              });
             this.data.changeMessage(this.menuList);
          }
      },
      err => {
          console.log(err);
      }
  );
  }

  }

