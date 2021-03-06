///<reference path="main/event-details/event-details.component.ts"/>
import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AgmCoreModule} from 'angular2-google-maps/core';

import {KaskadaGoogleMapsComponent} from './shared/kaskada-googlemaps/kaskada-googlemaps.component';

import {UsersService} from "./services/users.service";
import {EventsService} from "./services/events.service";

import {AppComponent} from './app.component';
import {FooterGlobalComponent} from './main/footer-global/footer-global.component';
import {HeaderGlobalComponent} from './main/header-global/header-global.component';
import {MainPageCentralComponent} from './main/main-page-central/main-page-central.component';
import {MainPageComponent} from './main/main-page/main-page.component';
import {EventsListHeaderComponent} from './main/events-list-header/events-list-header.component';

import {EventDetailsRightColumnComponent} from './main/event-details-right-column/event-details-right-column.component';

import {EventDetailsCentralComponent} from "./main/event-details-central/event-details-central.component";
import {EventDetailsTabCommentsComponent} from "./main/event-details-tab-comments/event-details-tab-comments.component";
import {EventDetailsTabEnrollComponent} from "./main/event-details-tab-enroll/event-details-tab-enroll.component";
import {EventDetailsTablistComponent} from "./main/event-details-tablist/event-details-tablist.component";
import {EventDetailsComponent} from "./main/event-details/event-details.component";
import {EventDetailsTabDescriptionComponent} from "./main/event-details-tab-description/event-details-tab-description.component";

import {routing} from "./app-routing.module";
import {EventsListBoxComponent} from "./main/events-list-box/events-list-box.component";
import {EventsListCitybarComponent} from './main/events-list-citybar/events-list-citybar.component';
import {EventsListSearchbarComponent} from './main/events-list-searchbar/events-list-searchbar.component';
import {EventsListBoxgridComponent} from './main/events-list-boxgrid/events-list-boxgrid.component';
import {EventsListComponent} from './main/events-list/events-list.component';
import {CalendarEditEventsRightColumnComponent} from "./calendar/calendar-edit-events-right-column/calendar-edit-events-right-column.component";
import {CalendarEditEventsFormComponent} from "./calendar/calendar-edit-events-form/calendar-edit-events-form.component";
import {CalendarEditEventsMenuComponent} from "./calendar/calendar-edit-events-menu/calendar-edit-events-menu.component";
import {CalendarEditEventsComponent} from "./calendar/calendar-edit-events/calendar-edit-events.component";
import {CalendarLeftColumnLogoboxComponent} from "./calendar/calendar-left-column-logobox/calendar-left-column-logobox.component";
import {CalendarLeftColumnInfoboxComponent} from "./calendar/calendar-left-column-infobox/calendar-left-column-infobox.component";
import {CalendarLeftColumnSettingsComponent} from "./calendar/calendar-left-column-settings/calendar-left-column-settings.component";
import {CalendarLeftColumnEventPublicComponent} from "./calendar/calendar-left-column-event-public/calendar-left-column-event-public.component";
import {CalendarLeftColumnLogoutComponent} from "./calendar/calendar-left-column-logout/calendar-left-column-logout.component";
import {CalendarLeftColumnMainnavComponent} from "./calendar/calendar-left-column-mainnav/calendar-left-column-mainnav.component";
import {CalendarLeftColumnCategoriesComponent} from "./calendar/calendar-left-column-categories/calendar-left-column-categories.component";
import {CalendarLeftColumComponent} from "./calendar/calendar-left-column/calendar-left-column.component";
import {CalendarBackofficeComponent} from "./calendar/calendar-backoffice/calendar-backoffice.component";
import {CalendarGridComponent} from "./calendar/calendar-grid/calendar-grid.component";
import {CalendarRightColumnComponent} from "./calendar/calendar-right-column/calendar-right-column.component";
import {CalendarTitleNavbarComponent} from "./calendar/calendar-title-navbar/calendar-title-navbar.component";
import {CalendarMonthViewLightBoxComponent} from "./calendar/calendar-month-view-light-box/calendar-month-view-light-box.component";
import {CalendarMonthViewDarkBoxComponent} from "./calendar/calendar-month-view-dark-box/calendar-month-view-dark-box.component";
import {CalendarMonthViewComponent} from "./calendar/calendar-month-view/calendar-month-view.component";
import {HowMakeComponent} from "./main/how-make/how-make.component";
import {CommentsService} from "./services/comments.service";
import {EventDetailsCommentComponent} from './main/event-details-comment/event-details-comment.component';
import {WeatherWidgetComponent} from "./shared/weather-widget/weather-widget.component";
import {CalendarLeftColumnCategoriesListComponent} from "./calendar/calendar-left-column-categories-list/calendar-left-column-categories-list.component";
import {CategoriesService} from "./services/categories.service";
import {CalendarMonthViewWeekListComponent} from "./calendar/calendar-month-view-week-list/calendar-month-view-week-list.component";
import {CalendarRightColumnEventsListComponent} from "./calendar/calendar-right-column-events-list/calendar-right-column-events-list.component";
import {CalendarModule, AccordionModule, DropdownModule, GrowlModule} from "primeng/primeng";
import {CalendarEditEventsUsersListComponent} from "./calendar/calendar-edit-events-users-list/calendar-edit-events-users-list.component";
import {CalendarEditEventsCommentComponent} from "./calendar/calendar-edit-events-comment/calendar-edit-events-comment.component";
import {CalendarEditEventsCommentsListComponent} from "./calendar/calendar-edit-events-comments-list/calendar-edit-events-comments-list.component";
import {CookieComponent} from "./main/cookie/cookie.component";
import {CalendarMonthViewLightBoxEventsListComponent} from "./calendar/calendar-month-view-light-box-events-list/calendar-month-view-light-box-events-list.component";
import {FilterPipe} from "./calendar/calendar-month-view-light-box/filterPipe";
import {TooltipModule} from "primeng/components/tooltip/tooltip";
import {CalendarEditEventsPublicSettingsComponent} from "./calendar/calendar-edit-events-public-settings/calendar-edit-events-public-settings.component";


@NgModule({
  declarations: [
    AppComponent,
    FooterGlobalComponent,
    HeaderGlobalComponent,
    KaskadaGoogleMapsComponent,
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
    CalendarEditEventsComponent,
    CalendarLeftColumnLogoboxComponent,
    CalendarLeftColumnInfoboxComponent,
    CalendarLeftColumnSettingsComponent,
    CalendarLeftColumnEventPublicComponent,
    CalendarLeftColumnLogoutComponent,
    CalendarLeftColumnMainnavComponent,
    CalendarLeftColumnCategoriesComponent,
    CalendarLeftColumComponent,
    CalendarBackofficeComponent,
    CalendarGridComponent,
    CalendarRightColumnComponent,
    CalendarTitleNavbarComponent,
    CalendarMonthViewLightBoxComponent,
    CalendarMonthViewDarkBoxComponent,
    CalendarMonthViewComponent,
    HowMakeComponent,
    EventDetailsCommentComponent,
    WeatherWidgetComponent,
    CalendarLeftColumnCategoriesListComponent,
    CalendarMonthViewWeekListComponent,
    CalendarRightColumnEventsListComponent,
    CalendarEditEventsUsersListComponent,
    CalendarEditEventsCommentComponent,
    CalendarEditEventsCommentsListComponent,
    CookieComponent,
    CalendarMonthViewLightBoxEventsListComponent,
    FilterPipe,
    CalendarEditEventsPublicSettingsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CalendarModule,
    AccordionModule,
    DropdownModule,
    GrowlModule,
    TooltipModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAfZ6Cyh-Ri-NBQykrD0HSz-4PXP1SDPLw'
    })
  ],
  providers: [
    UsersService,
    EventsService,
    CommentsService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
