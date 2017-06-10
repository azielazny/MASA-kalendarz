import {Component, OnInit, Input, OnChanges, AfterViewInit} from '@angular/core';
import {Router} from "@angular/router";
import {Event} from "../../class/event.class";
import {SelectItem} from 'primeng/primeng'
import {CategoriesService} from "../../services/categories.service";

declare var $: any;


@Component({
  selector: 'calendar-edit-events-form',
  templateUrl: 'calendar-edit-events-form.component.html',
  styleUrls: ['calendar-edit-events-form.component.scss']
})
export class CalendarEditEventsFormComponent implements OnInit, OnChanges, AfterViewInit {
  public username: string = localStorage.getItem("userName");
  @Input()
  private eventData: Event;
  private title: string = "";
  pl: any;
  private dateStart: string="";
  private hourStart: string="";
  private dateEnd: string="";
  private hourEnd: string="";
  private location: string="";
  private description: string="";

  cars: SelectItem[] = [];

  selectedCategory: any = 'fff';

  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.list(this.username, 0).map(val => val.forEach(v => this.buildCar(v))).subscribe();
  }

  buildCar(val) {
    this.cars.push({label: val.category_color, value: val});
  }


  ngOnInit() {
    //('.collapsed').collapse();
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
    if (this.eventData) {
      let loc_city= (this.eventData.loc_city) ? this.eventData.loc_city: "";
      let loc_country= (this.eventData.loc_country) ? this.eventData.loc_country: "";
      let loc_street= (this.eventData.loc_street) ? "ul. " +this.eventData.loc_street: "";
      let loc_number= (this.eventData.loc_bnum) ? this.eventData.loc_bnum: "";
      let loc_name= (this.eventData.loc_name) ? this.eventData.loc_name: "";

      this.title = (this.eventData.title) ? this.eventData.title : "Nazwa zdarzenia...";
      this.description = (this.eventData.description) ? this.eventData.description: "Opis zdarzenia...";
      this.location = (loc_name+" "+loc_country+" "+loc_city+" "+loc_street+" "+loc_number).trim();

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
  }

  ngAfterViewInit() {
    $('.collapse').collapse();
  }
}
