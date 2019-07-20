import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  organization;
  language;
  isCollapsed = true;

constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (!window.localStorage.getItem('org_details')) {
      window.localStorage.setItem('org_details', JSON.stringify(this.route.snapshot.data.dashboard.data));
    }
   }

}
