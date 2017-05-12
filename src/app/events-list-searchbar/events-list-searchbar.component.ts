import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {EventsService} from "../services/events.service";
import {EventsListBoxgridComponent} from "../events-list-boxgrid/events-list-boxgrid.component";
import {EventsListCitybarComponent} from "../events-list-citybar/events-list-citybar.component";
import {Router, NavigationEnd, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-events-list-searchbar',
  templateUrl: './events-list-searchbar.component.html',
  styleUrls: ['./events-list-searchbar.component.scss']
})
export class EventsListSearchbarComponent implements OnInit {

  public citiesList: string[] = [];

  @Input()
  public grid: EventsListBoxgridComponent;

  @Input()
  public citybar: EventsListCitybarComponent;

  public city: string;
  public scope : number;

  private recheckCity: boolean = false;

  constructor(private eventsService: EventsService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.city = params['city'];
      this.scope = params['scope'];

      if(this.city == "0") {
        if(this.citiesList.length == 0) {
          this.recheckCity = true;
          return;
        }

        this.city = this.citiesList[0];

        this.router.navigate(['/events/', this.city, this.scope, 1]);
      }

      if(this.city != "" && $.inArray(this.city, this.citiesList) != -1) {}
      else {
        if(this.citiesList.length == 0) {
          this.recheckCity = true;
          return;
        }
      }

      setTimeout(() => { $("select").val(this.city); }, 200);


    });
  }

  ngOnInit() {
    let x = this.eventsService.cities().subscribe(val => this.citiesListReturned(val));
  }

  citiesListReturned(value: string[]) {
    this.citiesList = value;

    if(this.recheckCity)
    {
      this.recheckCity = false;

      if(this.city == "0" || $.inArray(this.city, this.citiesList) == -1) {
        this.city = this.citiesList[0];
        this.router.navigate(['/events/', this.city, this.scope, 1]);
      }

      setTimeout(() => { $("select").val(this.city); }, 200);
    }
  }

  cityChanged() {
    this.city = $("select").val();
    this.router.navigate(['/events/', this.city, this.scope, 1]);
  }

  scopeChanged(value) {
    this.scope = value;
    this.router.navigate(['/events/', this.city, this.scope, 1]);
  }

}
