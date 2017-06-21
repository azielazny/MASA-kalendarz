import {
  Component, OnInit, Input, ViewChild, ViewChildren, Output, EventEmitter, OnChanges,
  AfterViewInit
} from '@angular/core';
import {Calendar} from "../../class/calendar.class";
import {EventsService} from "../../services/events.service";
import {CategoriesService} from "../../services/categories.service";
import {EventForGrid} from "../../class/eventForGrid.class";
import {Category} from "../../class/category.class";

@Component({
  selector: 'calendar-month-view',
  templateUrl: 'calendar-month-view.component.html',
  styleUrls: ['calendar-month-view.component.scss']
})
export class CalendarMonthViewComponent implements OnInit {

  public prevMonthDays: Calendar[] = [];
  public actualMonthDays: Calendar[] = [];
  public nextMonthDays: Calendar[] = [];
  public actualDay;
  public week_list: string[] = [];
  private eventsListForGrid: EventForGrid[] = [];
  private eventsListByDay: EventForGrid[] = [];


  public categories: Category[] = [];

  private now = new Date();
  private thisMonth = this.now.getMonth();
  private thisDay = this.now.getDate();
  private year = this.now.getFullYear();
  private month = this.now.getMonth();

  private days = ['pn', 'wt', 'sr', 'cz', 'pt', 'sb', 'nd'];
  private months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];


  @Input()
  public parent;

  @Output() outputEvent: EventEmitter<string> = new EventEmitter();
  @Output() outputDate: EventEmitter<string> = new EventEmitter();

  @ViewChildren('lightBoxes')
  public lightBoxes;

  constructor(private eventsService: EventsService, private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.now.setFullYear(this.now.getFullYear());
    this.monthGen(this.month, this.year);
    this.outputEvent.emit(this.months[this.thisMonth] + " " + this.year);

    this.getEventsListForGrid();
  }


  private getEventsListForGrid() {

    this.categoriesService.list().subscribe(val => {
      this.categories = val
    });
    let startDay = new Date(this.year, this.month, 1).getTime() / 1000;
    // console.log(startDay);
    let endDay = new Date(this.year, this.month + 1, 1).getTime() / 1000;
    // console.log(endDay);
    this.eventsService.list("private", "0", startDay, endDay).map(val => val.forEach(v => {
        this.eventsListForGrid.push(
          {
            "event_id": v.event_id,
            "title": v.title,
            "start_ts": v.start_ts,
            "end_ts": v.end_ts,
            "category": v.category,
            "color": this.getCategoryColor(v.category)
          }
        )
      })
    ).subscribe();

    // console.log(this.eventsListForGrid)
  }

  getCategoryColor(category_id): string {
    for (let category of this.categories) {
      if (category.category_id == category_id)
        return category.color
    }
    return '';
  }

//dni w miesiącu
  monthGen(m, y) {
    //reset pól
    this.actualDay = null;
    this.nextMonthDays = [];
    this.prevMonthDays = [];
    this.actualMonthDays = [];
    this.week_list = [];

    let mDays = CalendarMonthViewComponent.monthDays(m + 1, y);
    let mDaysPrev = CalendarMonthViewComponent.monthDays(m, y);

    let data = new Date(y, m, 1);
    let marginToDay = data.getDay() - 1;
    if (marginToDay < 0) {
      marginToDay = 7 + marginToDay;
    }
    //dni tyg
    for (let i = 0; i < this.days.length; i++) {
      this.week_list.push(this.days[i]);
    }
    //dni miesiąca
    for (let i = (1 - marginToDay), j = 0; i <= 42 - marginToDay; i++, j++) {
      if (i == this.thisDay && m == this.thisMonth && y == new Date().getFullYear()) this.actualDay = i;

      (i >= 1) ?
        (i > mDays) ?
          this.nextMonthDays.push({day: i - mDays, day_of_week: this.days[(j % 7)]}) :
          this.actualMonthDays.push({day: i, day_of_week: this.days[(j % 7)]})
        : this.prevMonthDays.push({day: mDaysPrev + i, day_of_week: this.days[(j % 7)]});

    }

  }

  static
  monthDays(month, year) {
    if (month != 2) {
      let x = (month <= 7) ? 1 : 0;
      return 30 + (Number(month % 2 == x));
    } else {
      return CalendarMonthViewComponent.februaryInYear(year);
    }

  }

  static
  februaryInYear(year) {
    return (year % 4 == 0) ? 29 : 28;
  }

  getPrevMonth() {
    this.now.setMonth(this.now.getMonth() - 1);
    this.year = this.now.getFullYear();
    this.month = this.now.getMonth();
    this.monthGen(this.month, this.year);
    this.outputEvent.emit(this.months[this.month] + " " + this.year);
    this.getEventsListForGrid();
  }

  getNextMonth() {
    this.now.setMonth(this.now.getMonth() + 1);
    this.year = this.now.getFullYear();
    this.month = this.now.getMonth();
    this.monthGen(this.month, this.year);
    this.outputEvent.emit(this.months[this.month] + " " + this.year);
    this.getEventsListForGrid();
  }

  clearActiveClass() {
    for (let x of this.lightBoxes.toArray())
      x.active = false;
  }

  openRightColumn(index) {
    this.parent.rightColumn.shown = true;

    this.parent.rightColumn.day = CalendarMonthViewComponent.formatForDate(index);
    this.parent.rightColumn.month = CalendarMonthViewComponent.formatForDate(this.month + 1);
    this.parent.rightColumn.year = this.year;
    this.outputDate.emit(CalendarMonthViewComponent.formatForDate(index) + "." + CalendarMonthViewComponent.formatForDate(this.month + 1) + "." + this.year);

    this.clearActiveClass();
    this.lightBoxes.toArray()[index - 1].active = true;
  }

  static formatForDate(num: number): string {
    let newNum: string = num + "";
    return (newNum.length < 2) ? "0" + newNum : newNum;
  }
}
