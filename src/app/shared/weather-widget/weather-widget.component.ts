import {Component, Input, OnInit, OnChanges, AfterViewInit, Inject, NgZone, HostBinding} from '@angular/core';
import {Event} from '../../class/event.class';
import {DOCUMENT} from "@angular/platform-browser";
declare var $: JQueryStatic;

@Component({
  selector: 'weather-widget',
  templateUrl: 'weather-widget.component.html',
  styleUrls: ['weather-widget.component.scss']
})


export class WeatherWidgetComponent implements OnInit, AfterViewInit, OnChanges {
  @Input()
  private eventdata: Event;

  private now: any = new Date();
  private maxDate: number = (this.now.getTime() + 15 * 24 * 60 * 60 * 1000);
  private _weatherappid = '9099fdbbe0e4de40bcfe29b960187173';
  private _weatherunits = 'metric';
  private _weathercontainer = 'openweathermap-widget';

  @HostBinding('class.hidden') hiddenStyle: boolean = false;

  constructor(private zone: NgZone, @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if (this.eventdata) {
      if (this.eventdata.start_ts >= this.now.getTime() && this.eventdata.start_ts <= this.maxDate)
        this.hiddenStyle = true;
    }
    this.buildWidget();

  }

  private buildWidget() {
    if (this.eventdata.event_id > 0) {
      (<any>window).myWidgetParam = {
        id: 21,
        event_date: this.eventdata.start_ts,
        city_name: this.eventdata.loc_city.trim(),
        appid: this._weatherappid,
        units: this._weatherunits,
        containerid: this._weathercontainer
      };
      require("app/shared/weather-widget/WeatherFromApi.js");
    }
  }

  ngOnChanges() {
    this.buildWidget();
  }
}
