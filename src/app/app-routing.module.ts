import {ModuleWithProviders}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainPageComponent}      from './main/main-page/main-page.component';
import {EventDetailsComponent}  from './main/event-details/event-details.component';
import {EventsListComponent} from "./main/events-list/events-list.component";
import {CalendarEditEventsComponent} from "./calendar/calendar-edit-events/calendar-edit-events.component";
import {CalendarBackofficeComponent} from "./calendar/calendar-backoffice/calendar-backoffice.component";
// import {EventsListComponent} from "./events-list/events-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {path: 'index', component: MainPageComponent},
  {path: 'event/:id/:utitle', component: EventDetailsComponent},
  {path: 'events/:city/:scope/:page', component: EventsListComponent},
  {path: 'calendar', component: CalendarBackofficeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
