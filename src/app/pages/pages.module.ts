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
import { MenudataService } from '../shared/services/menudata.service';
import { EditorialComponent } from './editorial/editorial.component';
import { AuthorGuidelinesComponent } from './guidelines/author-guidelines/author-guidelines.component';
import { EditorGuidelinesComponent } from './guidelines/editor-guidelines/editor-guidelines.component';
import { ReviewerGuidelinesComponent } from './guidelines/reviewer-guidelines/reviewer-guidelines.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

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
        SubmitManuscriptComponent,
        EditorialComponent,
        AuthorGuidelinesComponent,
        EditorGuidelinesComponent,
        ReviewerGuidelinesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RecaptchaModule,
        RecaptchaFormsModule,
        FormsModule,
        ReactiveFormsModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    MenudataService
  ]
})
export class PagesModule { }
