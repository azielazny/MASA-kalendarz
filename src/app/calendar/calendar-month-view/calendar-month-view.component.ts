import {Component, OnInit, Input, ViewChild, ViewChildren} from '@angular/core';
import {Calendar} from "../../class/calendar.class";

@Component({
  selector: 'calendar-month-view',
  templateUrl: 'calendar-month-view.component.html',
  styleUrls: ['calendar-month-view.component.scss']
})
export class CalendarMonthViewComponent implements OnInit {

  public keys_pre:Calendar[]=[];
  public keys:Calendar[] = [];
  public keys_post:Calendar[]=[];
  public keysactive;
  private week_list:string[]=[];

  private now = new Date();
  private thisMonth = this.now.getMonth();
  private thisDay = this.now.getDate();
  private year = this.now.getFullYear();
  private month = this.now.getMonth();

  private days = ['pn', 'wt', 'sr', 'cz', 'pt', 'sb', 'nd'];
  private months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];


  @Input()
  public parent;

  @ViewChildren('lightBoxes')
  public lightBoxes;

  constructor() {
  }

  openRightColumn(index) {
    this.parent.rightColumn.shown = true;
    this.parent.rightColumn.day = index;

    this.clearActiveClass();
    this.lightBoxes.toArray()[index - 1].active = true;
  }

  clearActiveClass() {
    for (let x of this.lightBoxes.toArray())
      x.active = false;
  }

  ngOnInit() {
    this.now.setFullYear(this.now.getFullYear());
    this.monthGen(this.month, this.year);
  }

  getPrevMonth() {
    this.now.setMonth(this.now.getMonth() - 1);
    this.year = this.now.getFullYear();
    this.month = this.now.getMonth();
    this.monthGen(this.month, this.year);
  }

  getNextMonth() {
    this.now.setMonth(this.now.getMonth() + 1);
    this.year = this.now.getFullYear();
    this.month = this.now.getMonth();
    this.monthGen(this.month, this.year);
  }

  februaryInYear(year) {
    return (year % 4 == 0) ? 29 : 28;
  }

  monthDays(month, year) {
    if (month != 2) {
      let x = (month <= 7) ? 1 : 0;
      return 30 + (Number(month % 2 == x));
    } else {
      return this.februaryInYear(year);
    }

  }

  //dni w miesiącu
  monthGen(m, y) {
    this.keysactive = null;
    this.keys_post = [];
    this.keys_pre = [];
    this.keys = [];

    let mDays = this.monthDays(m + 1, y);
    let mDaysPrev = this.monthDays(m, y);

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
      if (i == this.thisDay && m == this.thisMonth && y == this.year) this.keysactive = i;

      (i >= 1) ?
        (i > mDays) ?
          this.keys_post.push({day:i - mDays, day_of_week:this.days[(j % 7)]}) :
          this.keys.push({day:i, day_of_week:this.days[(j % 7)]})
        : this.keys_pre.push({day:mDaysPrev + i, day_of_week:this.days[(j % 7)]});

    }

  }
}
