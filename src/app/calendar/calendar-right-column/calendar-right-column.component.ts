import {Component, OnInit, Input, NgZone} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {Event} from "../../class/event.class";

@Component({
  selector: 'calendar-right-column',
  templateUrl: 'calendar-right-column.component.html',
  styleUrls: ['calendar-right-column.component.scss']
})
export class CalendarRightColumnComponent implements OnInit {
  public username: string = localStorage.getItem("userName");

  private eventslist: Event[] = [];
  private counter: number = 0;
  private height: number;
  private limitEvents: number;
  private eventsToShow: Event[] = [];

  constructor(private eventsService: EventsService, ngZone: NgZone) {
    this.height = <any>window.innerHeight;
    this.limitEvents = this.limitEventsToShow();
    this.eventsService.listForUserByDate(this.username, 5).subscribe(val => {
      this.eventByData(val, 0);
    });
  }

  private eventByData(value: Event[], index: number) {
    this.eventsToShow=[];
    this.eventslist = value;
    for (let i=index;i<index+this.limitEvents;i++) {
      this.eventsToShow.push(value[i]);
      if(this.eventslist.length - 1==i) break;
    }
    console.log(this.eventslist);
  }

  @Input()
  public parent;

  public day = 0;
  public shown = false;

  limitEventsToShow(): number {
    let limit: number = Math.floor((this.height - 140) / 230);
    return (limit > 0) ? limit : 1;
  }

  addNewEvent() {
    this.parent.editEvents.shown = true;
  }

  ngOnInit() {

  }

  changeEventsDataPrev() {
    let eventsCounter = this.eventslist.length - 1;

    if (this.counter - 1 < 0) {
      this.eventByData(this.eventslist, 0);
      this.counter = 0;
    } else {
      this.eventByData(this.eventslist, this.counter - 1);
      this.counter -= 1;
    }
  }

  changeEventsDataNext() {
    let eventsCounter = this.eventslist.length - 1;
    if (this.counter + 1 > eventsCounter) {
      this.eventByData(this.eventslist, 0);
      this.counter = 0;
    } else {
      this.eventByData(this.eventslist, this.counter + 1);
      this.counter += 1;

    }
  }

}
