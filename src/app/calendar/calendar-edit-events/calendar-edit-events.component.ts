import {Component, OnInit, Input, OnChanges, ViewChild, Output, EventEmitter} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {Event} from "../../class/event.class";
import {Message} from 'primeng/primeng';


@Component({
  selector: 'calendar-edit-events',
  templateUrl: 'calendar-edit-events.component.html',
  styleUrls: ['calendar-edit-events.component.scss']
})
export class CalendarEditEventsComponent implements OnInit, OnChanges {
  public username: string = localStorage.getItem("userName");
  public shown = false;
  public tab = 'edit';
  public eventData: Event;
  private visibility: string;
  private reminder: boolean;
  msgs: Message[] = [];

  @Input()
  private selectedEvent: number;

  @Input()
  public parent;

  @Output() outputCloseRightColumn: EventEmitter<boolean> = new EventEmitter();


  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.selectedEvent) {
      this.eventsService.detailsForUser(this.username, this.selectedEvent).subscribe(val => {
        this.eventData = val;
      });
    }
  }

  changeVisibilityOfEvent(value) {
    this.visibility = value;
  }

  changeReminderOfEvent(value) {
    this.reminder = value;
  }

  removeEvent(event_id: number) {

    if (this.eventData) {
      this.eventsService.remove(event_id).subscribe(val => {
        if (val == true) {
          this.shown = false;
          this.msgs = [];
          this.msgs.push({severity: 'success', summary: 'Usunięto event', detail: 'Okno edycji zostało zamknięte'});
          this.outputCloseRightColumn.emit(true);
          return;
        }
        this.msgs = [];
        this.msgs.push({severity: 'warn', summary: 'Nie usunięto eventu', detail: 'Nie mogę usunąć tego wydarzenia'});
      });
    }
  }

}





