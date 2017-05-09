import { Component } from '@angular/core';
import { Event } from './class/event.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello angular!';
  ev : Event;

  public constructor() {
    this.ev = new Event();
    this.ev.event_id = 1;
    this.ev.user_id = 1;
    this.ev.title = "TEST TITLE";
    this.ev.end_ts = 1496178000;
    this.ev.start_ts = 1494313200;
    this.ev.loc_name = "TEST NAME";
    this.ev.loc_street = "TEST STREET";
    this.ev.loc_bnum = "55";
    this.ev.loc_city = "CITY HERE WILL BE";
  }
}

