import {ModuleWithProviders}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainPageComponent}      from './main-page/main-page.component';
import {EventsDetailsComponent}  from './events-details/events-details.component';
// import {EventsComponent}  from './event-detail/events.component';

const routes: Routes = [
  // { path: '', redirectTo: '/index', pathMatch: 'full' },
  {path: 'index', component: MainPageComponent},
  {path: 'event-detail/:id', component: EventsDetailsComponent},
  // {path: 'Events', component: Events}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
