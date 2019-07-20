import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'cms-support-pop-up',
  templateUrl: './support-pop-up.component.html',
  styleUrls: ['./support-pop-up.component.scss']
})
export class SupportPopUpComponent implements OnInit {
  isVisible = false;
  supportDetailsForm: FormGroup;
  supportDropDownVal = ['Account is blocked', 'Forgot username', 'Reset password', 'Mobile application login', 'Others'];
  selectedCountryCode = '+91';

  countryCodeData = [
    {
      label: 'Australia	+61	',
      value: '+61'
    },
    {
      label: 'China +86',
      value: '+86'
    },
    {
      label: 'India +91',
      value: '+91'
    },
    {
      label: 'Mexico +52',
      value: '+52'
    },
    {
      label: 'Singapore	+65',
      value: '+65'
    },
    {
      label: 'Sri Lanka	+94',
      value: '+94'
    },
    {
      label: 'Switzerland	+41',
      value: '+41'
    },
    {
      label: 'UK +44',
      value: '+44'
    },
    {
      label: 'United Arab Emirates	+971',
      value: '+971'
    },
    {
      label: 'USA +1',
      value: '+1'
    }

  ];
  selectedValue = 'Please select a topic';
 invalidTopic = false;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.supportDetailsForm = this.fb.group({
      registrationNumber: [null, [Validators.required]],
      phoneNo: [null, [Validators.required]],
      userEmail: [null, [Validators.email, Validators.required]],
      message: [null, [Validators.required]],
      remember: [true]
   });

  }

  openSupportPopup() {
    this.isVisible = true;
  }

  submitForm() {
    const regNumber = this.supportDetailsForm.controls.registrationNumber.value;
    const contactNum = this.supportDetailsForm.controls.phoneNo.value;
    const userMail = this.supportDetailsForm.controls.userEmail.value;
    const message = this.supportDetailsForm.controls.message.value;
// tslint:disable-next-line: forin
    for (const i in this.supportDetailsForm.controls) {
      this.supportDetailsForm.controls[i].markAsDirty();
      this.supportDetailsForm.controls[i].updateValueAndValidity();
    }
    if (this.selectedValue === 'Please select a topic') {
      this.invalidTopic = true;
    }
  }

  closeSupportModal() {
    this.isVisible = false;
  }

}
