import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {
  eblist = [];
  constructor(private http: HttpClient,     private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    this.getEbList();
  }
  getEbList() {
    this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/editorialBoard/`).subscribe(
        (resp: any) => {
            if (resp.status === 'Success') {
                this.eblist = resp.editorialBoards;
                this.eblist.forEach(eb => {
                  let uploadUrl= `http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/userMgmt/user/profileImage/${eb.editorName}`;
                  this.http.get(uploadUrl, {responseType: 'blob'}).subscribe(
                      (data: Blob) =>{
                          let reader = new FileReader();
                          if (data.size !== 0) {
                              reader.readAsDataURL(data);
                              reader.addEventListener("load", () => {
                                eb['userPic'] = this.sanitizer.bypassSecurityTrustUrl(reader.result.toString()); 
                              }, false);
                          }
                      }
                  );
                });
            }
        },
        err => {
            console.log(err);
        }
    );
}
}
