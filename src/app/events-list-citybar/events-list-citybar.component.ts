import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-events-list-citybar',
  templateUrl: './events-list-citybar.component.html',
  styleUrls: ['./events-list-citybar.component.scss']
})
export class EventsListCitybarComponent implements OnInit {

  public selected_city: string = "";

  constructor() { }

  ngOnInit() {
  }

  changeCity(city: string) {
    this.selected_city = city;
  }

}
