import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calendar-left-column-event-categories',
  templateUrl: './calendar-left-column-event-categories.component.html',
  styleUrls: ['./calendar-left-column-event-categories.component.scss']
})
export class CalendarLeftColumnCategoriesComponent implements OnInit {

  constructor(private router: Router) {}


  ngOnInit() {
  }

}

