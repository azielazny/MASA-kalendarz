import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'calendar-title-navbar',
  templateUrl: 'calendar-title-navbar.component.html',
  styleUrls: ['calendar-title-navbar.component.scss']
})
export class CalendarTitleNavbarComponent implements OnInit {

  public username = localStorage.getItem("userName");

  constructor() {}


  ngOnInit() {
  }

}
