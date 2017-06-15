import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {Event} from "../../class/event.class";

@Component({
  selector: 'calendar-right-column-events-list',
  templateUrl: 'calendar-right-column-events-list.component.html',
  styleUrls: ['calendar-right-column-events-list.component.scss']
})
export class CalendarRightColumnEventsListComponent implements OnInit {

  @Input()
  public parent;
  @Input()
  private eventdata: Event;

  private startDate: string;
  private endDate: string;
  @Output() outputEventId: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    if(this.eventdata.start_ts>0)
      this.setStartData(this.eventdata.start_ts);
    if(this.eventdata.end_ts>0)
      this.setEndData(this.eventdata.end_ts);

  }

  private setStartData(timestamp: number) {
    let evDate = new Date(timestamp * 1e3);
    this.startDate = CalendarRightColumnEventsListComponent.formatForDate(evDate.getDate()) + "." + CalendarRightColumnEventsListComponent.formatForDate(evDate.getMonth() + 1) + "." + evDate.getFullYear() + " od godz." + evDate.getHours() + ":" + evDate.getMinutes();
  }

  private setEndData(timestamp: number) {
    let evDate = new Date(timestamp * 1e3);
    this.endDate = CalendarRightColumnEventsListComponent.formatForDate(evDate.getDate()) + "." + CalendarRightColumnEventsListComponent.formatForDate(evDate.getMonth() + 1) + "." + evDate.getFullYear() + " do godz. " + evDate.getHours() + ":" + evDate.getMinutes();
  }

  static formatForDate(num: number): string {
    let newNum: string = num + "";
    return (newNum.length < 2) ? "0" + newNum : newNum;
  }

  editEvent(event_id:number) {
    this.parent.parent.editEvents.shown = true;
    this.outputEventId.emit(event_id);

  }

}
