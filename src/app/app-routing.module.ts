import {ModuleWithProviders}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainPageComponent}      from './main/main-page/main-page.component';
import {EventDetailsComponent}  from './main/event-details/event-details.component';
import {EventsListComponent} from "./main/events-list/events-list.component";
import {CalendarEditEventsComponent} from "./calendar/calendar-edit-events/calendar-edit-events.component";
import {CalendarBackofficeComponent} from "./calendar/calendar-backoffice/calendar-backoffice.component";
// import {EventsListComponent} from "./events-list/events-list.component";

const routes: Routes = [
  

      {path: '', pathMatch: 'full',redirectTo: '/index'},

        {path: 'index', component: MainPageComponent},


  {path: 'event/:id/:utitle', component: EventDetailsComponent},
  {path: 'events/:city/:scope/:page', component: EventsListComponent},
  {path: 'calendar', component: CalendarBackofficeComponent},
  // { path: '', redirectTo: '/index', pathMatch: 'full' },


];
export const appRoutingProviders: any[] = [];
// export const routing = RouterModule.forRoot(routes);
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


