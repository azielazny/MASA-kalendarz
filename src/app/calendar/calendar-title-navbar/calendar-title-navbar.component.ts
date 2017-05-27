import {Component, OnInit, Input} from '@angular/core';
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

  @Input()
  public parent;

  checkIfShowShortView() {
    return this.parent.parent.leftColumn.logoBox.showShortView && ($(document).width() > $("#main").width());
  }

  ngOnInit() {
  }

}
