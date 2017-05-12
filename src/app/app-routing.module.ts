import {ModuleWithProviders}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainPageComponent}      from './main-page/main-page.component';
import {EventDetailsComponent}  from './event-details/event-details.component';
import {EventsListComponent} from "./events-list/events-list.component";
// import {EventsListComponent} from "./events-list/events-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {path: 'index', component: MainPageComponent},
  {path: 'event/:id/:utitle', component: EventDetailsComponent},
  {path: 'events/:city/:scope/:page', component: EventsListComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
