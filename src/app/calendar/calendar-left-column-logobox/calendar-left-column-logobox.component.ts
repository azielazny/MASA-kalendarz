import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'calendar-left-column-logobox',
  templateUrl: 'calendar-left-column-logobox.component.html',
  styleUrls: ['calendar-left-column-logobox.component.scss']
})
export class CalendarLeftColumnLogoboxComponent implements OnInit {

  constructor() {}

  public showShortView = false;

  ngOnInit() {
  }

}

