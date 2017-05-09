import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterGlobalComponent } from './footer-global/footer-global.component';
import { HeaderGlobalComponent } from './header-global/header-global.component';
import { MainPageCentralComponent } from './main-page-central/main-page-central.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EventsListHeaderComponent } from './events-list-header/events-list-header.component';

import {EventsRightColumnComponent} from './events-right-column/event-right-column.component';

import {EventsDetailsCentralComponent} from "./events-details-central/events-details-central.component";
import {EventsDetailsCommentComponent} from "./events-details-comment/events-details-comment.component";
import {EventsDetailsRegisterComponent} from "./events-details-register/events-details-register.component";
import {EventsDetailsTablistComponent} from "./events-details-tablist/events-details-tablist.component";
import {EventsDetailsComponent} from "./events-details/events-details.component";
import {EventsDetailsDescriptionComponent} from "./events-details-description/events-details-description.component";

import {Router} from "@angular/router";





@NgModule({
  declarations: [
    AppComponent,
    FooterGlobalComponent,
    HeaderGlobalComponent,
    MainPageCentralComponent,
    MainPageComponent,
    EventsListHeaderComponent,
    EventsRightColumnComponent,
    EventsDetailsCentralComponent,
    EventsDetailsCommentComponent,
    EventsDetailsRegisterComponent,
    EventsDetailsTablistComponent,
    EventsDetailsComponent,
    EventsDetailsDescriptionComponent,
    router



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
