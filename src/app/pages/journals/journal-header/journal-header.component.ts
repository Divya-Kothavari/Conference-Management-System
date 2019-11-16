import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-journal-header',
  templateUrl: './journal-header.component.html',
  styleUrls: ['./journal-header.component.scss']
})
export class JournalHeaderComponent implements OnInit {
  upoadFlyerUrl: string;
  imageToShowFlyer: any;
  imageToShow: any;
  upoadBannerUrl: string;
  journalDetails: any;
  selectedUser: any;
  journalid: any;

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer) { this.route.params.subscribe(params => {
      this.journalid = params.id;
    }); }

    ngOnInit(): void {
      this.http
        .get(
          `http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journal/${this.journalid}`
        )
        .subscribe(
          (resp: any) => {
            if (resp.status === "Success") {
              this.journalDetails = resp.journal;
              if (this.journalDetails.journalPrimaryAdmin) {
                this.selectedUser = this.journalDetails.journalPrimaryAdmin.split(
                  ","
                );
              }
              // this.getEbList();
              // this.dataAvailable = true;
  
              this.upoadBannerUrl = `http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journalBanner/${this.journalid}`;
              this.http
                .get(this.upoadBannerUrl, { responseType: "blob" })
                .subscribe((data: Blob) => {
                  if (data.size !== 0) {
                    let reader = new FileReader();
                    reader.readAsDataURL(data);
                    reader.addEventListener(
                      "load",
                      () => {
                        this.imageToShow = this.sanitizer.bypassSecurityTrustUrl(
                          reader.result.toString()
                        );
                        const img = new Image();
                        img.src = this.imageToShow.changingThisBreaksApplicationSecurity;
                        document.getElementById(
                          `banner`
                        ).style.backgroundImage = `url(${img.src})`;
                      },
                      false
                    );
                  } else {
                    document.getElementById(
                      `banner`
                    ).style.backgroundImage = `url(../assets/img/1.jpg)`;
                  }
                });
  
  
                this.upoadFlyerUrl = `http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/journalFlyer/${this.journalid}`;
              this.http
                .get(this.upoadFlyerUrl, { responseType: "blob" })
                .subscribe((data: Blob) => {
                  if (data.size !== 0) {
                    let reader = new FileReader();
                    reader.readAsDataURL(data);
                    reader.addEventListener(
                      "load",
                      () => {
                        this.imageToShowFlyer = this.sanitizer.bypassSecurityTrustUrl(
                          reader.result.toString()
                        );
                      //   const img = new Image();
                      //   img.src = this.imageToShow.changingThisBreaksApplicationSecurity;
                      //   this.imageToShowFlyer = this.sanitizer.bypassSecurityTrustUrl(reader.result.toString());  
                      //   document.getElementById(
                      //     `flyer`
                      //   ).style.backgroundImage = `url(${img.src})`;
                      },
                      false
                    );
                  } else {
                    document.getElementById(
                      `flyer`
                    ).style.backgroundImage = `url(../assets/img/1.jpg)`;
                  }
                });
            }
          },
          err => {
            console.log(err);
          }
        );
    }

}
