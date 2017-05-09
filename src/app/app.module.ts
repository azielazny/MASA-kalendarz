import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EventsService } from "./services/events.service";

import { AppComponent } from './app.component';
import { FooterGlobalComponent } from './footer-global/footer-global.component';
import { HeaderGlobalComponent } from './header-global/header-global.component';
import { MainPageCentralComponent } from './main-page-central/main-page-central.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EventsListHeaderComponent } from './events-list-header/events-list-header.component';
import { EventsListBoxComponent } from './events-list-box/events-list-box.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterGlobalComponent,
    HeaderGlobalComponent,
    MainPageCentralComponent,
    MainPageComponent,
    EventsListHeaderComponent,
    EventsListBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
