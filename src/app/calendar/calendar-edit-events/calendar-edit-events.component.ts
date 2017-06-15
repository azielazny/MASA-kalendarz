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
  private remindEvent: boolean;
  msgs: Message[] = [];

  @Input()
  private selectedEvent: number;
  @Input()
  public parent;

  @Output() outputCloseRightColumn: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('editEventsForm') editEventsForm;

  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {

    (this.selectedEvent) ? this.eventsService.detailsForUser(this.username, this.selectedEvent).subscribe(val => {
        this.eventData = val;
      }) : this.eventData = null;

  }

  changeVisibilityOfEvent(value) {
    this.visibility = value;
  }

  changeReminderOfEvent(value) {
    this.remindEvent = value;
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

  saveEvent(status: boolean) {
    let validationStatus = this.validation();
    if (this.validation() != "ok") {
      this.msgs = [];
      this.msgs.push({
        severity: 'warn',
        summary: 'W formularzu są błędy',
        detail: 'Znaleziono następujące błędy w formularzu:<br>' + validationStatus
      });
      return;
    }
    this.buildEventData();
    (this.eventData.event_id) ? this.updateEvent() : this.addEvent();
  }

  validation(): string {
    let validationStatus: string = "";
    //pola wymagane
    if (this.editEventsForm.selectedCategory == "") validationStatus += "- Nie wybrano kategorii<br>";
    if (this.editEventsForm.eventData.title == "") validationStatus += "- Tytuł jest polem obowiązkowym<br>";
    if (this.editEventsForm.startDate == "") validationStatus += "- Data startu wydarzenia musi zostać podana<br>";
    if (this.editEventsForm.endDate == "") validationStatus += "- Data końca wydarzenia musi zostać podana";
    if (validationStatus != "") {
      this.editEventsForm.error = true;
      return validationStatus;
    }
    return "ok";
  }

  private buildEventData() {
    this.eventData = this.editEventsForm.eventData;
    this.eventData.category = this.editEventsForm.selectedCategory.category_id;

    let startDate = this.editEventsForm.dateStart.split("/");
    let startHour = this.editEventsForm.hourStart.split(":");
    this.eventData.start_ts = new Date(startDate[2], startDate[1] - 1, startDate[0], startHour[0], startHour[1], 0).getTime() / 1000;

    let endDate = this.editEventsForm.dateEnd.split("/");
    let endHour = this.editEventsForm.hourEnd.split(":");
    this.eventData.end_ts = new Date(endDate[2], endDate[1] - 1, endDate[0], endHour[0], endHour[1], 0).getTime() / 1000;

  }

  addEvent() {
    this.eventsService.add(this.eventData).subscribe(val => {
      if (val == true) {
        this.msgs = [];
        this.msgs.push({
          severity: 'success',
          summary: 'Dodano event',
          detail: 'Wydarzenie zostało zapisane w kalendarzu'
        });
        return;
      }
      this.outputCloseRightColumn.emit(true);
      this.msgs = [];
      this.msgs.push({
        severity: 'warn',
        summary: 'Nie zapisano eventu',
        detail: 'Mamy problem z zapisem Twojego formularza'
      });
    });
  }

  updateEvent() {
    this.eventsService.update(this.eventData).subscribe(val => {
      if (val == true) {
        this.msgs = [];
        this.msgs.push({
          severity: 'success',
          summary: 'Dodano event',
          detail: 'Wydarzenie zostało zapisane w kalendarzu'
        });
        return;
      }
      this.outputCloseRightColumn.emit(true);
      this.msgs = [];
      this.msgs.push({
        severity: 'warn',
        summary: 'Nie zapisano eventu',
        detail: 'Mamy problem z zapisem Twojego formularza'
      });
    });
  }


}





