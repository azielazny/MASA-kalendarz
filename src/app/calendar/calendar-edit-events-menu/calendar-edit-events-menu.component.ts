import {Component, OnInit, Output, EventEmitter, OnChanges, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Event} from "../../class/event.class";
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'calendar-edit-events-menu',
  templateUrl: 'calendar-edit-events-menu.component.html',
  styleUrls: ['calendar-edit-events-menu.component.scss']
})
export class CalendarEditEventsMenuComponent implements OnInit, OnChanges {
  private visibility: string = "private";
  private reminder: boolean = true;

  @Input()
  private eventData: Event;

  @Output() outputVisibility: EventEmitter<string> = new EventEmitter();
  @Output() outputReminder: EventEmitter<boolean> = new EventEmitter();
  @Output() outputRemover: EventEmitter<number> = new EventEmitter();
  @Output() outputEventSaver: EventEmitter<number> = new EventEmitter();


  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.eventData) {
      this.visibility = this.eventData.visibility;
      this.reminder = this.eventData.is_remind_set;
    }
  }

  private isVisibility(status: string) {
    this.visibility = (status == "private") ? "public" : "private";
    this.outputVisibility.emit(this.visibility);
  }

  private isReminder(status: boolean) {
    this.reminder = (status != true);
    this.outputReminder.emit(this.reminder);
  }

  private removeEvent(event_id: number) {
    this.outputRemover.emit(event_id);
  }
  private saveEvent(status: number) {
    this.outputEventSaver.emit(status);
  }
}
