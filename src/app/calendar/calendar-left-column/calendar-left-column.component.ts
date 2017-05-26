import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calendar-left-column',
  templateUrl: 'calendar-left-column.component.html',
  styleUrls: ['calendar-left-column.component.scss']
})
export class CalendarLeftColumComponent implements OnInit {

  constructor() {}

  @ViewChild('logoBox') public logoBox;

  ngOnInit() {
  }

}

