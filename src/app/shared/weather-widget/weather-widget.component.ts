import {Component, Input, OnInit, OnChanges, AfterViewInit, Inject} from '@angular/core';
import {window} from "rxjs/operator/window";
import {Weather} from "../../class/weather.class";
// declare var WeatherFromApi: any;
declare var $:JQueryStatic;

@Component({
  selector: 'weather-widget',
  templateUrl: 'weather-widget.component.html',
  styleUrls: ['weather-widget.component.css']
})


export class WeatherWidgetComponent implements OnInit {

   myWidgetParam: {id: number; event_date: number; city_name: string; appid: string; units: string; containerid: string};
   x:any;

  constructor() {

  }
  ngAfterViewInit() {
    // $( document ).ready(function() {

    this.myWidgetParam = {
      id: 21,
      event_date: 1496898730,
      city_name: "Gdańsk",
      appid: '9099fdbbe0e4de40bcfe29b960187173',
      units: 'metric',
      containerid: 'openweathermap-widget'
    };
      this.x=require("app/shared/weather-widget/WeatherFromApi.js");
    // });
  }
  ngOnInit() {

  }

}
