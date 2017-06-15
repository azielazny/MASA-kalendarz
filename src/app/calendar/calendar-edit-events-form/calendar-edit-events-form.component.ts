import {Component, OnInit, Input, OnChanges, AfterViewInit, Inject} from '@angular/core';
import {Event} from "../../class/event.class";
import {SelectItem} from 'primeng/primeng'
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../class/category.class";
import {User} from "../../class/user.class";
import {EventsService} from "../../services/events.service";
import {DOCUMENT} from "@angular/platform-browser";
declare var $: any;


@Component({
  selector: 'calendar-edit-events-form',
  templateUrl: 'calendar-edit-events-form.component.html',
  styleUrls: ['calendar-edit-events-form.component.scss']
})
export class CalendarEditEventsFormComponent implements OnInit, OnChanges, AfterViewInit {
  public username: string = localStorage.getItem("userName");
  private pl: any;
  private dateStart: string = "";
  private hourStart: string = "";
  private dateEnd: string = "";
  private hourEnd: string = "";
  private selectedCategory: Category = {color: "#ddd", user_id: 0, name: "", category_id: 0};
  private error: boolean = false;
  private usersData: User[] = [];
  private usersCount:number;

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
    if (this.eventData) {
      this.eventData.visibility=(undefined != this.visibility)?this.visibility:(this.eventData.visibility)?this.eventData.visibility:"private";
      this.visibility=undefined;

      this.eventData.reminder=(undefined != this.remindEvent)? this.remindEvent:(this.eventData.reminder)? this.eventData.reminder:true;
      this.remindEvent=undefined;

      this.getUsersList();
      this.getSelectedCategoryData();
      this.buildEventDeteData();
    } else {
      this.eventData = null;
      this.dateStart = "";
      this.hourStart = "";
      this.dateEnd = "";
      this.hourEnd = "";
      this.usersData=[];
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
    this.eventsService.userListForEvent(this.eventData.event_id).subscribe(val => {
      this.usersData = val
    });
    this.usersCount=this.usersData.length;
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

    let day1 = start.getDate();
    let day1_s: string = day1.toString();
    if (day1 < 10) day1_s = '0' + day1.toString();

    let month1 = start.getMonth() + 1;
    let month1_s: string = month1.toString();
    if (month1 < 10) month1_s = '0' + month1.toString();

    this.dateStart = day1_s + '/' + month1_s + '/' + start.getFullYear().toString();

    let end = new Date(this.eventData.end_ts * 1000);

    let day2 = end.getDate();
    let day2_s: string = day2.toString();
    if (day2 < 10) day2_s = '0' + day2.toString();

    let month2 = end.getMonth() + 1;
    let month2_s: string = month2.toString();
    if (month2 < 10) month2_s = '0' + month2.toString();

    this.dateEnd = day2_s + '/' + month2_s + '/' + end.getFullYear().toString();

    let hStart = start.getHours(), hEnd = end.getHours();
    let mStart = start.getMinutes(), mEnd = end.getMinutes();

    let h1_s = hStart.toString(), h2_s = hEnd.toString();
    let m1_s = mStart.toString(), m2_s = mEnd.toString();

    if (hStart < 10) h1_s = '0' + hStart.toString();
    if (hEnd < 10) h2_s = '0' + hEnd.toString();
    if (mStart < 10) m1_s = '0' + mStart.toString();
    if (mEnd < 10) m2_s = '0' + mEnd.toString();

    this.hourStart = h1_s + ':' + m1_s;
    this.hourEnd = h2_s + ':' + m2_s;
  }
  ngAfterViewInit() {
    $('.collapse').collapse();
  }
}
