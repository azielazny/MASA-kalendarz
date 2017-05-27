import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'calendar-left-column-logout',
  templateUrl: 'calendar-left-column-logout.component.html',
  styleUrls: ['calendar-left-column-logout.component.scss']
})
export class CalendarLeftColumnLogoutComponent implements OnInit {

  constructor(private userService: UsersService) {}

  logoutAction() {
    this.userService.logout();

    localStorage.clear();
  }

  ngOnInit() {
  }

}

