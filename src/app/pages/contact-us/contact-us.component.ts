import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  invlidCaptcha = false;
  contactUsEmail;
  contactUsMessage;
  contactUsName;
  contactUsSubject;
  constructor(private http: HttpClient,) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
  resolved(e) {
    if (e) {
       this.invlidCaptcha = false;
    } else {
        this.invlidCaptcha = true;
    }
}

sendMail() {
  this.http.post(
    `http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/contactus/`, 
    {contactUsId: 0, contactUsEmail: this.contactUsEmail, contactUsMessage: this.contactUsMessage,
    contactUsName: this.contactUsName, contactUsSubject: this.contactUsSubject}).subscribe(
    (resp:any) => {
      if (resp.code === '200') {
        this.contactUsSubject = '';
        this.contactUsEmail = '';
        this.contactUsName = '';
        this.contactUsMessage = '';
      }
    }
  );
}
}
