import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-events-list-citybar',
  templateUrl: 'events-list-citybar.component.html',
  styleUrls: ['events-list-citybar.component.scss']
})
export class EventsListCitybarComponent implements OnInit {

  public selected_city: string = "";

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.selected_city = params['city'];
    });
  }

  ngOnInit() {
  }

}
