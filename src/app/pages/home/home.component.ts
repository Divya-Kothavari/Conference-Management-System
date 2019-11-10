import { Component, OnInit } from '@angular/core';
import { MenudataService } from 'src/app/shared/services/menudata.service';
import { OrgMenu } from '../header/org-menu.model';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuList: OrgMenu[] = [];
  homedesc;
  homecontent;
  listOfAllJournals = [];
  upoadBannerUrl;
  imageToShow =[];
  dataAvailable = false;
  constructor(private data: MenudataService, private http: HttpClient, 
    private sanitizer : DomSanitizer,) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.data.currentMessage.subscribe(
      (value) => {
        this.menuList = value;
        this.menuList.forEach(memu => {
          if (memu.menuLink === '/') {
             this.homedesc = memu.menuDescription;
             this.homecontent = memu.menuContent;
          }
        });
      }
    );
    this.getJournalsList();
  }
  getJournalsList() {
    this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journal`).subscribe(
    (resp: any) => {
        if (resp.status === 'Success') {
          this.listOfAllJournals = resp.journals;
           this.listOfAllJournals.length = 6;
          this.listOfAllJournals.forEach((jrnl, index) => {
            this.upoadBannerUrl = 
            `http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journalBanner/${jrnl.journalShortName}`;
            this.http.get(this.upoadBannerUrl, {responseType: 'blob'}).subscribe(
              (data: Blob) =>{
                if (data.size !== 0) {
                      let reader = new FileReader();
                      reader.readAsDataURL(data);
                      reader.addEventListener("load", () => {
                        this.imageToShow[index] = this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
                        const img = new Image();
                        img.src = this.imageToShow[index].changingThisBreaksApplicationSecurity;
                        document.getElementById(`jrnl${index}`).style.backgroundImage = `url(${img.src})`;
                      }, false);
                    } else {
                      document.getElementById(`jrnl${index}`).style.backgroundImage = `url(../assets/img/1.jpg)`;
                    }
              }
          );
          });
          this.dataAvailable = true;
        }
      }
    );
  }
}
