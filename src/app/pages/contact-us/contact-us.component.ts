import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

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
  isLoading = false;
  constructor(private http: HttpClient, private toastr: ToastrService) { }

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
  this.isLoading = true;
  this.http.post(
    `http://cmsservices-dev.cvqprwnpp8.us-east-2.elasticbeanstalk.com/contactus/`, 
    {contactUsId: 0, contactUsEmail: this.contactUsEmail, contactUsMessage: this.contactUsMessage,
    contactUsName: this.contactUsName, contactUsSubject: this.contactUsSubject}, {responseType: 'text'}).subscribe(
    (resp) => {
      this.isLoading = false;
      this.toastr.success(resp);
      this.contactUsSubject = '';
      this.contactUsEmail = '';
      this.contactUsName = '';
      this.contactUsMessage = '';
    }
  );
}
}
