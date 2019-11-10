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
  imageToShow = [];
  dataAvailable = false;
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
          this.listOfAllJournals.forEach((jrnl, index) => {
            this.upoadBannerUrl = 
            `http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journalBanner/${jrnl.journalShortName}`;
            this.http.get(this.upoadBannerUrl, {responseType: 'blob'}).subscribe(
              (data: Blob) =>{
                      let reader = new FileReader();
                      reader.readAsDataURL(data);
                      reader.addEventListener("load", () => {
                        this.imageToShow[index] = this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());
                        const img = new Image();
                        img.src = this.imageToShow[index].changingThisBreaksApplicationSecurity;
                        document.getElementById(`jrnl${index}`).style.backgroundImage = `url(${img.src})`;
                      }, false);
              }
          );
          });
          this.dataAvailable = true;
          console.log(this.listOfAllJournals);
        }
      }
    );
  }
}
