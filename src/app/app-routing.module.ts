import {ModuleWithProviders}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainPageComponent}      from './main-page/main-page.component';
import {EventsDetailsComponent}  from './events-details/events-details.component';
// import {EventsListComponent} from "./events-list/events-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {path: 'index', component: MainPageComponent},
  {path: 'event/:id', component: EventsDetailsComponent},
  // {path: 'events', component: EventsListComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
