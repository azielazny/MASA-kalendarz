import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calendar-left-column-event-public',
  templateUrl: './calendar-left-column-event-public.component.html',
  styleUrls: ['./calendar-left-column-event-public.component.scss']
})
export class CalendarLeftColumnEventPublicComponent implements OnInit {

  constructor(private router: Router) {}


  ngOnInit() {
  }

}

