import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import {Router} from "@angular/router";
@Component({
  selector: 'calendar-edit-events',
  templateUrl: './calendar-edit-events.component.html',
  styleUrls: ['./calendar-edit-events.component.scss']
})
export class CalendarEditEventsComponent implements OnInit {

  constructor(private router: Router) {}


  ngOnInit() {
  }

}
