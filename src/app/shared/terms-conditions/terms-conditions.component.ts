import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cms-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss'],
  encapsulation: ViewEncapsulation.None

})

export class TermsConditionsComponent implements OnInit {
  isVisible = false;

  constructor() { }

  ngOnInit() {}


   openTermsPopup() {
    this.isVisible = true;
   }

   closeTermsModal() {
    this.isVisible = false;
  }

}
