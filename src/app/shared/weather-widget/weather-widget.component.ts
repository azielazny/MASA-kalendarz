import {Component, Input, OnInit, OnChanges, AfterViewInit, Inject, NgZone, HostBinding} from '@angular/core';
import {Event} from '../../class/event.class';
declare var $: JQueryStatic;

@Component({
  selector: 'weather-widget',
  templateUrl: 'weather-widget.component.html',
  styleUrls: ['weather-widget.component.scss']
})


export class WeatherWidgetComponent implements OnInit, AfterViewInit {
  @Input()
  private _eventdata: Event;

  private now: any = new Date();
  private maxDate: number = (this.now.getTime() + 15 * 24 * 60 * 60 * 1000);
  private _weatherappid = '9099fdbbe0e4de40bcfe29b960187173';
  private _weatherunits = 'metric';
  private _weathercontainer = 'openweathermap-widget';
  private _weatherApiFile = "app/shared/weather-widget/WeatherFromApi.js";

  @HostBinding('class.hidden') hiddenStyle: boolean = false;

  constructor(private zone: NgZone) {
  }

  ngOnInit() {
    if (this._eventdata.start_ts >= this.now.getTime() && this._eventdata.start_ts <= this.maxDate)
      this.hiddenStyle = true;
  }

  ngAfterViewInit() {
    (<any>window).myWidgetParam = {
      id: 21,
      event_date: this._eventdata.start_ts,
      city_name: this._eventdata.loc_city.trim(),
      appid: this._weatherappid,
      units: this._weatherunits,
      containerid: this._weathercontainer
    };
    require(this._weatherApiFile);

  }

}
