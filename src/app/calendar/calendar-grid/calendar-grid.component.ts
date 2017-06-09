import {Component, OnInit, Input, ViewChild, OnChanges} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calendar-grid',
  templateUrl: 'calendar-grid.component.html',
  styleUrls: ['calendar-grid.component.scss']
})
export class CalendarGridComponent implements OnInit {

  constructor() {}

  @Input()
  public parent;

  public actualMonth;
  public selectedDate;
  private selectedEvent;

  @ViewChild('rightColumn') rightColumn;
  @ViewChild('editEvents') editEvents;

  checkIfShowShortView() {
    return this.parent.leftColumn.logoBox.showShortView && ($(document).width() > $("#main").width());
  }

  ngOnInit() {
  }
  getEventID(value) {
    this.selectedEvent=value;
  }

  changeOfMonth(value) {
    this.actualMonth=value;
  }
  sendDateToRightColumn(value) {
    this.selectedDate=value;
  }

}
