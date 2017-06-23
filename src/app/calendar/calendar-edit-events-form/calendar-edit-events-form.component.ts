import {Component, OnInit, Input, OnChanges, AfterViewInit, Inject, EventEmitter, Output} from '@angular/core';
import {Event} from "../../class/event.class";
import {SelectItem} from 'primeng/primeng'
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../class/category.class";
import {User} from "../../class/user.class";
import {EventsService} from "../../services/events.service";
import {DOCUMENT} from "@angular/platform-browser";
import {Attendant} from "../../class/attendant.class";
declare var $: any;


@Component({
  selector: 'calendar-edit-events-form',
  templateUrl: 'calendar-edit-events-form.component.html',
  styleUrls: ['calendar-edit-events-form.component.scss']
})
export class CalendarEditEventsFormComponent implements OnInit, OnChanges, AfterViewInit {
  public username: string = localStorage.getItem("userName");
  private pl: any;
  private dateStart: Date;
  private dateEnd: Date;
  private selectedCategory: Category = {color: "#ddd", user_id: 0, name: "", category_id: 0};
  private error: boolean = false;
  private usersData: Attendant[] = [];
  private usersCount: number;
  private selectedDate:string;

  @Output() pictureChanged = new EventEmitter();

  categories: SelectItem[] = [];

  @Input()
  private eventData: Event;
  @Input()
  private visibility: string;
  @Input()
  private remindEvent: boolean;
  @Input()
  public parent;

  constructor(private categoriesService: CategoriesService, private eventsService: EventsService, @Inject(DOCUMENT) private document: any) {
    this.categoriesService.list().map(val => val.forEach(v => this.buildEventData(v))).subscribe();
  }

  buildEventData(val) {
    this.categories.push({label: val.color, value: val});
  }

  ngOnInit() {
    this.pl = {
      firstDayOfWeek: 1,
      dayNames: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"],
      dayNamesShort: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
      dayNamesMin: ["N", "P", "W", "Ś", "C", "P", "S"],
      monthNames: ["styczeń", "luty", "marzec", "kwicień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
      monthNamesShort: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paż", "lis", "gru"]
    }
  }


  ngOnChanges() {
    this.error = false;

    this.eventData.visibility = (undefined != this.visibility) ? this.visibility : (this.eventData.visibility) ? this.eventData.visibility : "private";
    this.visibility = undefined;
    if (this.eventData.event_id > 0) {

      this.eventData.is_remind_set = (undefined != this.remindEvent) ? this.remindEvent : (this.eventData.is_remind_set) ? this.eventData.is_remind_set : true;
      this.remindEvent = undefined;

      this.getSelectedCategoryData();
      this.getUsersList();
      this.buildEventDeteData();
    } else {
      this.usersData = [];
      if (this.selectedDate != undefined) {
        let eventDate=this.selectedDate.split(".");
        this.dateStart=new Date(parseInt(eventDate[2]), parseInt(eventDate[1])-1, parseInt(eventDate[0]));
        this.dateEnd=new Date(parseInt(eventDate[2]), parseInt(eventDate[1])-1, parseInt(eventDate[0]));
      }
    }
  }

  printDiv(divName) {
    let printContents, popupWin;
    printContents = this.document.getElementById(divName).innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
          <html>
              <head>
                  <title>Print from .Makeplan</title>
              </head>
              <body onload="window.print();window.close()">${printContents}
              </body>
          </html>`
    );
    popupWin.document.close();
  }

  private getUsersList() {
    this.eventsService.attendants(this.eventData.event_id).subscribe(val => {
      this.usersData = val
    });
    this.usersCount = this.usersData.length;
    // console.log(this.usersCount)
  }

  private getSelectedCategoryData() {
    if (this.eventData.category != 0) {
      this.categories.filter(val => {
        if (val.value.category_id == this.eventData.category)
          this.selectedCategory = val.value;
      });
    }
  }

  private buildEventDeteData() {
// czasy początku i końca (formatowanie)
    let start = new Date(this.eventData.start_ts * 1000);
    let end = new Date(this.eventData.end_ts * 1000);

    this.dateStart = start;
    this.dateEnd = end;
  }

  private updatePicture(e) {
    this.pictureChanged.emit(e);
  }

  ngAfterViewInit() {
    $('.collapse').collapse();
  }
}
