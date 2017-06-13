import {Component, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calendar-edit-events-menu',
  templateUrl: 'calendar-edit-events-menu.component.html',
  styleUrls: ['calendar-edit-events-menu.component.scss']
})
export class CalendarEditEventsMenuComponent implements OnInit {
  private visibility:string="private";
  //public OR private
  @Output() outputVisibility: EventEmitter<string> = new EventEmitter();
  constructor() {}


  ngOnInit() {
  }

  isVisibility(status:string) {
    this.visibility=(status=="private")?"public":"private";
    this.outputVisibility.emit(this.visibility);
  }
}
