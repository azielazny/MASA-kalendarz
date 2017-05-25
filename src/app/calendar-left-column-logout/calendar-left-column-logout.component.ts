import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calendar-left-column-logout',
  templateUrl: './calendar-left-column-logout.component.html',
  styleUrls: ['./calendar-left-column-logout.component.scss']
})
export class CalendarLeftColumnLogoutComponent implements OnInit {
  
  constructor(private router: Router) {}


  ngOnInit() {
  }

}

