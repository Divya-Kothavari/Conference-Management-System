import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {
  eblist = [];
  constructor(private http: HttpClient, ) { }

  ngOnInit() {
    this.getEbList();
  }
  getEbList() {
    this.http.get(`http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/cmsjournalmgmt/editorialBoard/`).subscribe(
        (resp: any) => {
            if (resp.status === 'Success') {
                this.eblist = resp.editorialBoards;
            }
        },
        err => {
            console.log(err);
        }
    );
}
}
