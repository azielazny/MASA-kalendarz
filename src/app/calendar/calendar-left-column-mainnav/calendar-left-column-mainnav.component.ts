import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calendar-left-column-mainnav',
  templateUrl: 'calendar-left-column-mainnav.component.html',
  styleUrls: ['calendar-left-column-mainnav.component.scss']
})
export class CalendarLeftColumnMainnavComponent implements OnInit {

  constructor() {}

  @Input()
  public parent;

  ngOnInit() {
  }

  showSettings() {
    console.log(this.parent.parent.showSettings());
  }
}

