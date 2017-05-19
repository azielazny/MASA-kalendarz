import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersService } from "./services/users.service";
import { EventsService } from "./services/events.service";

import { AppComponent } from './app.component';
import { FooterGlobalComponent } from './footer-global/footer-global.component';
import { HeaderGlobalComponent } from './header-global/header-global.component';
import { MainPageCentralComponent } from './main-page-central/main-page-central.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EventsListHeaderComponent } from './events-list-header/events-list-header.component';

import {EventDetailsRightColumnComponent} from './event-details-right-column/event-details-right-column.component';

import {EventDetailsCentralComponent} from "./event-details-central/event-details-central.component";
import {EventDetailsTabCommentsComponent} from "./event-details-tab-comments/event-details-tab-comments.component";
import {EventDetailsTabEnrollComponent} from "./event-details-tab-enroll/event-details-tab-enroll.component";
import {EventDetailsTablistComponent} from "./event-details-tablist/event-details-tablist.component";
import {EventDetailsComponent} from "./event-details/event-details.component";
import {EventDetailsTabDescriptionComponent} from "./event-details-tab-description/event-details-tab-description.component";

import {routing} from "./app-routing.module";
import {EventsListBoxComponent} from "./events-list-box/events-list-box.component";
import { EventsListCitybarComponent } from './events-list-citybar/events-list-citybar.component';
import { EventsListSearchbarComponent } from './events-list-searchbar/events-list-searchbar.component';
import { EventsListBoxgridComponent } from './events-list-boxgrid/events-list-boxgrid.component';
import { EventsListComponent } from './events-list/events-list.component';
import {CalendarEditEventsRightColumnComponent} from "./calendar-edit-events-right-column/calendar-edit-events-right-column.component";
import {CalendarEditEventsFormComponent} from "./calendar-edit-events-form/calendar-edit-events-form.component";
import {CalendarEditEventsMenuComponent} from "./calendar-edit-events-menu/calendar-edit-events-menu.component";
import {CalendarEditEventsComponent} from "./calendar-edit-events/calendar-edit-events.component";






@NgModule({
  declarations: [
    AppComponent,
    FooterGlobalComponent,
    HeaderGlobalComponent,
    MainPageCentralComponent,
    MainPageComponent,
    EventsListHeaderComponent,
    EventDetailsRightColumnComponent,
    EventDetailsCentralComponent,
    EventDetailsTabCommentsComponent,
    EventDetailsTabEnrollComponent,
    EventDetailsTablistComponent,
    EventDetailsComponent,
    EventDetailsTabDescriptionComponent,
    EventsListBoxComponent,
    EventsListBoxComponent,
    EventsListCitybarComponent,
    EventsListSearchbarComponent,
    EventsListBoxgridComponent,
    EventsListComponent,
    CalendarEditEventsRightColumnComponent,
    CalendarEditEventsFormComponent,
    CalendarEditEventsMenuComponent,
    CalendarEditEventsComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    UsersService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
