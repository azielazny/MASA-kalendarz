import {Component, OnInit, Input} from '@angular/core';
import {EventsService} from "../services/events.service";
import {Event} from "../class/event.class";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-events-list-boxgrid',
  templateUrl: './events-list-boxgrid.component.html',
  styleUrls: ['./events-list-boxgrid.component.scss']
})
export class EventsListBoxgridComponent implements OnInit {

  constructor(private eventsServce: EventsService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.city = params['city'];
      this.scope = params['scope'];
      this.page = params['page'];

      this.getEventsList();
    });
  }

  private city: string;
  private scope: number = 0;
  private page :number = 1;
  private limit :number = 100;

  private totalPages: number = 5;
  private arr : Array<number> = [];

  private resized_imgs : boolean = false;

  public eventslist : Event[] = [];

  ngOnInit() {
    $(window).resize(function () {
      let $event_image_img = $(".event-image img");
      $(".event-image-cover").width($event_image_img.width() + 1).height($event_image_img.height() + 1);
    });

    this.eventsServce.total().subscribe(val => {
      this.totalPages = Math.ceil(val / this.limit);

      this.arr = [];
      for(let i = 0; i < this.totalPages; ++i) {
        this.arr[i] = i+1;
      }
    });


  }

  changePage(page)
  {
    this.router.navigate(['/events/', this.city, this.scope, page]);
  }

  public listToday() {
    if(this.scope == 1) return;

    this.scope = 1;
  }

  public listWeek() {
    if(this.scope == 2) return;

    this.scope = 2;
  }

  public listAll() {
    if(this.scope == 3) return;

    this.scope = 3;
  }

  public changeCity(city: string) {
    if(this.city == city) return;
    this.city = city;
  }

  private getEventsList() {
    if(this.city == "" || this.city == "%" || this.scope == 0) return;

    let start = new Date();
    let end = new Date();

    if(this.scope == 1) // today (from now on)
    {
      end.setHours(23);
      end.setMinutes(59);
      end.setSeconds(59);
    }
    else if(this.scope == 2) { // week (from now on)
      end.setTime(+start + (7*24*3600*1000));
    }
    else { // all (from now on)
      start.setTime(0);
      end.setTime(2147483647000);
    }

    this.eventsServce.list('public', this.city, Math.round(+start/1000), Math.round(+end/1000), this.page - 1, this.limit).subscribe(val => this.populateEventsList(val));
  }

  private populateEventsList(value : Event[]) {
    this.eventslist = value;

    setTimeout(function() {
      let $event_image_img = $(".event-image img");
      $(".event-image-cover").width($event_image_img.width() + 1).height($event_image_img.height() + 1);
    }, 200);
  }

}
