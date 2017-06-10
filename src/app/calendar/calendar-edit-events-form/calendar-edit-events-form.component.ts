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
  private title:string="";
  pl: any;
  private dateStart: string;
  private hourStart: string;
  private dateEnd: string;
  private hourEnd: string;

  cars: SelectItem[]=[];

  selectedCategory: any = 'fff';
  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.list(this.username, 0).map(val=>val.forEach(v=>this.buildCar(v))).subscribe();
  }
  buildCar(val) {
    this.cars.push({label:val.category_color, value: val});
  }

  
  ngOnInit() {
    //('.collapsed').collapse();
    this.pl = {
      firstDayOfWeek: 1,
      dayNames: [ "niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota" ],
      dayNamesShort: [ "niedz.","pon.","wt.","śr.","czw.","pt.","sob." ],
      dayNamesMin: [ "N","P","W","Ś","C","P","S" ],
      monthNames: [ "styczeń","luty","marzec","kwicień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień" ],
      monthNamesShort: [ "sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paż","lis","gru" ]
    }
  }

  ngOnChanges() {
    if(this.eventData) {
      this.title = (this.eventData.title.length > 0) ? this.eventData.title : "Nazwa zdarzenia...";
    }
  }
  ngAfterViewInit(){
    $('.collapse').collapse();
  }
}
