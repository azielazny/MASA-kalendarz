import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {EventsService} from "../services/events.service";
import {EventsListBoxgridComponent} from "../events-list-boxgrid/events-list-boxgrid.component";
import {EventsListCitybarComponent} from "../events-list-citybar/events-list-citybar.component";

@Component({
  selector: 'app-events-list-searchbar',
  templateUrl: './events-list-searchbar.component.html',
  styleUrls: ['./events-list-searchbar.component.scss']
})
export class EventsListSearchbarComponent implements OnInit {

  public citiesList: string[];

  @Input()
  public grid: EventsListBoxgridComponent;

  @Input()
  public citybar: EventsListCitybarComponent;

  currentPeriod : number = 2;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    let x = this.eventsService.cities().subscribe(val => this.citiesListReturned(val));
  }

  citiesListReturned(value: string[]) {
    this.citiesList = value;

    this.citybar.changeCity(value[0]);
    this.grid.changeCity(value[0]);

    this.grid.listWeek();
  }

  cityChanged() {
    let city = $("select").val();
    this.grid.changeCity(city);
    this.citybar.changeCity(city);
  }

  listToday() {
    this.grid.listToday();
    this.currentPeriod = 1;
  }

  listWeek() {
    this.grid.listWeek();
    this.currentPeriod = 2;
  }

  listAll() {
    this.grid.listAll();
    this.currentPeriod = 3;
  }

}
