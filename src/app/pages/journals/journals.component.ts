import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.scss']
})
export class JournalsComponent implements OnInit {
  listOfAllJournals = [];
  upoadBannerUrl;

  constructor(private http: HttpClient, 
    private sanitizer : DomSanitizer,
    ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getJournalsList();
  }
  getJournalsList() {
    this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journal`).subscribe(
    (resp: any) => {
        if (resp.status === 'Success') {
          this.listOfAllJournals = resp.journals;
          this.listOfAllJournals.forEach(jrnl => {
            this.upoadBannerUrl = 
            `http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journalBanner/${jrnl.journalShortName}`;
            this.http.get(this.upoadBannerUrl, {responseType: 'blob'}).subscribe(
              (data: Blob) =>{
                  if (data.size !== 0) {
                      let reader = new FileReader();
                      reader.readAsDataURL(data);
                      reader.addEventListener("load", () => {
                        jrnl['bannerPic'] = this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
                      }, false);
                  }
              }
          );
          });
        }
      }
    );
  }
}
