import {Component, OnInit, Input, NgZone, OnChanges, Output, EventEmitter, ViewChild} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {Event} from "../../class/event.class";
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../class/category.class";


@Component({
  selector: 'calendar-right-column',
  templateUrl: 'calendar-right-column.component.html',
  styleUrls: ['calendar-right-column.component.scss']
})
export class CalendarRightColumnComponent implements OnInit, OnChanges {
  public username: string = localStorage.getItem("userName");
  private eventslist: Event[] = [];
  private counter: number = 0;
  private height: number;
  private limitEvents: number;
  private eventsToShow: Event[] = [];
  public shown = false;
  private categoriesList: Category[] = [];

  @Input()
  public selectedDate;

  @Input()
  public parent;

  @Output() outputEventId: EventEmitter<number> = new EventEmitter();

  constructor(private eventsService: EventsService, private categoriesService: CategoriesService) {
    this.height = <any>window.innerHeight;
    this.limitEvents = this.limitEventsToShow();
  }

  limitEventsToShow(): number {
    let limit: number = Math.floor((this.height - 140) / 230);
    return (limit > 0) ? limit : 1;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.categoriesService.list().map(val => val.forEach(v => this.categoriesList.push(v))).subscribe();

    this.eventsService.listForUserByDate(this.username, this.selectedDate).subscribe(val => {
      this.eventByData(val, 0);
    });
  }

  private eventByData(value: Event[], index: number) {
    this.eventsToShow = [];
    this.eventslist = value;
    for (let i = index; i < index + this.limitEvents; i++) {
      this.eventsToShow.push(value[i]);
      if (this.eventslist.length - 1 == i) break;
    }
    // console.log(this.eventslist);
  }

  addNewEvent() {
    this.outputEventId.emit(null);
    this.parent.editEvents.shown = true;
  }

  changeEventsDataPrev() {
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

  getEventID(value) {
    this.outputEventId.emit(value);
  }

}
