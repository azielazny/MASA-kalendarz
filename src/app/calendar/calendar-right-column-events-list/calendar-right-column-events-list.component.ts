import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {Event} from "../../class/event.class";

@Component({
  selector: 'calendar-right-column-events-list',
  templateUrl: 'calendar-right-column-events-list.component.html',
  styleUrls: ['calendar-right-column-events-list.component.scss']
})
export class CalendarRightColumnEventsListComponent implements OnInit, OnChanges {
  private startDate: string;
  private endDate: string;
  private location: string;

  @Input()
  public parent;
  @Input()
  private eventdata: Event;

  @Output() outputEventId: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.eventdata.start_ts > 0)
      this.setStartData(this.eventdata.start_ts);
    if (this.eventdata.end_ts > 0)
      this.setEndData(this.eventdata.end_ts);
    this.buildLocation();

  }

  private setStartData(timestamp: number) {
    let evDate = new Date(timestamp * 1e3);
    this.startDate = CalendarRightColumnEventsListComponent.formatForDate(evDate.getDate()) + "." + CalendarRightColumnEventsListComponent.formatForDate(evDate.getMonth() + 1) + "." + evDate.getFullYear() + " od godz." + CalendarRightColumnEventsListComponent.formatForDate(evDate.getHours()) + ":" + CalendarRightColumnEventsListComponent.formatForDate(evDate.getMinutes());
  }

  private setEndData(timestamp: number) {
    let evDate = new Date(timestamp * 1e3);
    this.endDate = CalendarRightColumnEventsListComponent.formatForDate(evDate.getDate()) + "." + CalendarRightColumnEventsListComponent.formatForDate(evDate.getMonth() + 1) + "." + evDate.getFullYear() + " do godz. " + CalendarRightColumnEventsListComponent.formatForDate(evDate.getHours()) + ":" + CalendarRightColumnEventsListComponent.formatForDate(evDate.getMinutes());
  }

  static formatForDate(num: number): string {
    let newNum: string = num + "";
    return (newNum.length < 2) ? "0" + newNum : newNum;
  }

  editEvent(event_id: number) {
    this.parent.parent.editEvents.shown = true;
    this.outputEventId.emit(event_id);

  }

  private buildLocation() {
    this.location = "";

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

  }

}
