import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    AppRoutingModule,
    NgxTwitterTimelineModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
