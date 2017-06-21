import {Component, OnInit, Input, OnChanges, AfterViewInit} from '@angular/core';
import {Router} from "@angular/router";
import {Event} from "../../class/event.class";


@Component({
  selector: 'calendar-edit-events-right-column',
  templateUrl: 'calendar-edit-events-right-column.component.html',
  styleUrls: ['calendar-edit-events-right-column.component.scss']
})
export class CalendarEditEventsRightColumnComponent implements OnInit, OnChanges {
  @Input()
  private eventdata: Event;
  private location: string;

  constructor() {
  }


  ngOnInit() {
  }

  ngOnChanges() {
    (this.eventdata.event_id > 0) ? this.buildLocationData() : this.location = "";
  }


  private buildLocationData() {
// lokalizacja (formatowanie)
    this.location = "";
    if (this.eventdata) {
      if (this.eventdata.loc_name != null)
        this.location += this.eventdata.loc_name.trim() + ', ';

      if (this.eventdata.loc_street != null)
        this.location += this.eventdata.loc_street.trim();

      if (this.eventdata.loc_street != null && this.eventdata.loc_bnum != null)
        this.location += " ";

      if (this.eventdata.loc_bnum != null)
        this.location += this.eventdata.loc_bnum.trim();

      if ((this.eventdata.loc_street != null || this.eventdata.loc_bnum != null) && this.eventdata.loc_city != null)
        this.location += ', ';

      if (this.eventdata.loc_city != null)
        this.location += this.eventdata.loc_city.trim();

      this.location = this.location.toUpperCase();
    }
  }

}
