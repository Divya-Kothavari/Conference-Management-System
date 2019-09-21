import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-details',
  templateUrl: './org-details.component.html',
  styleUrls: ['./org-details.component.css']
})
export class OrgDetailsComponent implements OnInit {

  active:boolean = true;
  isVisible: boolean = false;



  constructor() { }

  ngOnInit() {
  }

  addMenu(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    //console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  

}
