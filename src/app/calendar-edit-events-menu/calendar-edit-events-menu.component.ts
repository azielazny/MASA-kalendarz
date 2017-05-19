import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calendar-edit-events-menu',
  templateUrl: './calendar-edit-events-menu.component.html',
  styleUrls: ['./calendar-edit-events-menu.component.scss']
})
export class CalendarEditEventsMenuComponent implements OnInit {

  constructor(private router: Router) {}


  ngOnInit() {
  }

}
