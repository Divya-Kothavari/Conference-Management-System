import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { OpenAccessComponent } from './open-access/open-access.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { JournalsComponent } from './journals/journals.component';
import { SubmitManuscriptComponent } from './submit-manuscript/submit-manuscript.component';
import { JournalViewComponent } from './journals/journal-view/journal-view.component';

@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent, 
    AboutComponent,
     HomeComponent, 
     OpenAccessComponent, 
     GuidelinesComponent, 
     ContactUsComponent,
      PageNotFoundComponent,
       JournalsComponent,
       JournalViewComponent,
        SubmitManuscriptComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class PagesModule { }
