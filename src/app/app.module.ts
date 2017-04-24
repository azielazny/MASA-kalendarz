import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterGlobalComponent } from './footer-global/footer-global.component';
import { HeaderGlobalComponent } from './header-global/header-global.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterGlobalComponent
    HeaderGlobalComponent
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