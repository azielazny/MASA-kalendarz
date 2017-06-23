import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calendar-left-column-settings',
  templateUrl: 'calendar-left-column-settings.component.html',
  styleUrls: ['calendar-left-column-settings.component.scss']
})
export class CalendarLeftColumnSettingsComponent implements OnInit {

  @Input()
  public parent;

  constructor() {}


  ngOnInit() {
  }

}

