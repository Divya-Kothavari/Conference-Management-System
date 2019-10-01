import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OpenAccessComponent } from './open-access/open-access.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JournalsComponent } from './journals/journals.component';
import { SubmitManuscriptComponent } from './submit-manuscript/submit-manuscript.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent

  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'open-access',
    component: OpenAccessComponent
  },
  {
    path:'guidelines',
    component: GuidelinesComponent
  },
  {
    path:'journals',
    component: JournalsComponent
  },
  {
    path:'submit-manuscript',
    component: SubmitManuscriptComponent
  },
  {
    path:'contact-us',
    component: ContactUsComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
