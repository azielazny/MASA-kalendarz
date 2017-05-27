import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calendar-month-view-light-box',
  templateUrl: 'calendar-month-view-light-box.component.html',
  styleUrls: ['calendar-month-view-light-box.component.scss']
})
export class CalendarMonthViewLightBoxComponent implements OnInit {

  constructor() {}

  @Input()
  public parent;

  public mouseover = false;
  public active = false;

  ngOnInit() {
  }

}
