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
  private visibility: string = "private";
  private remindEvent: boolean;
  private picture: string = "data:,";
  msgs: Message[] = [];

  @Input()
  private selectedDate: string;
  @Input()
  private selectedEvent: number = 0;
  @Input()
  public parent;

  @Output() outputCloseRightColumn: EventEmitter<boolean> = new EventEmitter();
  @Output() outputRemoveEvent: EventEmitter<number> = new EventEmitter();

  @ViewChild('editEventsForm') editEventsForm;

  constructor(private eventsService: EventsService) {
    this.clearEventData()
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.editEventsForm.selectedDate = this.selectedDate;
    (this.selectedEvent > 0) ? this.eventsService.details(this.selectedEvent).subscribe(val => {
        this.eventData = val;
      }) : this.clearEventData();
    this.selectedEvent = 0;
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
          this.outputRemoveEvent.emit(event_id);
          this.shown = false;
          this.parent.overflow='overflow-auto';
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

  saveEvent(status: number) {
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
    (this.eventData.event_id > 0) ? this.updateEvent() : this.addEvent();
  }

  validation(): string {
    let validationStatus: string = "";
    //pola wymagane
    if (this.editEventsForm.selectedCategory == "") validationStatus += "- Nie wybrano kategorii<br>";
    if (this.editEventsForm.eventData.title == "") validationStatus += "- Tytuł jest polem obowiązkowym<br>";
      if (!Date.parse(this.editEventsForm.dateStart)) validationStatus += "- Data startu wydarzenia musi zostać podana<br>";
      if (!Date.parse(this.editEventsForm.dateEnd)) validationStatus += "- Data końca wydarzenia musi zostać podana<br>";
    if (this.editEventsForm.eventData.description_edit == "") validationStatus += "- Opis wydarzenia jest wymagany";
    if (validationStatus != "") {
      this.editEventsForm.error = true;
      return validationStatus;
    }

    return "ok";
  }

  private buildEventData() {
    this.eventData = this.editEventsForm.eventData;
    this.eventData.category = this.editEventsForm.selectedCategory.category_id;
    this.eventData.start_ts = this.editEventsForm.dateStart.getTime() / 1000;
    this.eventData.end_ts = this.editEventsForm.dateEnd.getTime() / 1000;
    this.eventData.visibility = this.visibility;
    this.eventData.picture = this.picture;
  }

  private pictureChanged(e) {
    this.picture = e;
  }

  private clearEventData() {
    this.eventData = {
      event_id: 0,
      user_id: 0,
      title: "",
      picture: "",
      creat_ts: 0,
      mod_ts: 0,
      start_ts: 0,
      end_ts: 0,
      is_day_long: false,
      timezone: "",
      visibility: "private",
      description: "",
      description_edit: "",
      loc_name: "",
      loc_street: "",
      loc_bnum: "",
      loc_city: "",
      loc_country: "",
      loc_lat: "",
      loc_lon: "",
      enabled: true,
      is_remind_set: true,
      remind_threshold: 0,
      category: 0,
      attendants: 0
    }
  }

  addEvent() {
    console.log(this.eventData);

    this.eventsService.add(this.eventData).subscribe(val => {
      console.log(val);
      if (val.event_id >0) {
        this.eventData=val;
        this.msgs = [];
        this.msgs.push({
          severity: 'success',
          summary: 'Dodano event',
          detail: 'Wydarzenie zostało zapisane w kalendarzu'
        });
        this.outputRemoveEvent.emit(0);
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
    console.log(this.eventData);
    this.eventsService.edit(this.eventData.event_id, this.eventData).subscribe(val => {
      if (val == true) {
        this.msgs = [];
        this.msgs.push({
          severity: 'success',
          summary: 'Zaktualizowano event',
          detail: 'Wydarzenie zostało zapisane w kalendarzu'
        });
        this.outputRemoveEvent.emit(0);
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

  closeEditCal() {
    this.parent.overflow='overflow-auto';
    this.shown = false;
  }

}





