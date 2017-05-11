import {Component, OnInit, Input} from '@angular/core';
import {EventsService} from "../services/events.service";
import {Event} from "../class/event.class";

@Component({
  selector: 'app-events-list-boxgrid',
  templateUrl: './events-list-boxgrid.component.html',
  styleUrls: ['./events-list-boxgrid.component.scss']
})
export class EventsListBoxgridComponent implements OnInit {

  constructor(private eventsServce: EventsService) { }

  private city: string;
  private scope: number = 0;
  private page :number = 0;
  private limit :number = 100;

  private resized_imgs : boolean = false;

  public eventslist : Event[];

  ngOnInit() {
    $(window).resize(function () {
      let $event_image_img = $(".event-image img");
      $(".event-image-cover").width($event_image_img.width() + 1).height($event_image_img.height() + 1);
    });
  }

  public listToday() {
    if(this.scope == 1) return;

    this.scope = 1;
    this.getEventsList();
  }

  public listWeek() {
    if(this.scope == 2) return;

    this.scope = 2;
    this.getEventsList();
  }

  public listAll() {
    if(this.scope == 3) return;

    this.scope = 3;
    this.getEventsList();
  }

  public changeCity(city: string) {
    if(this.city == city) return;
    this.city = city;
    this.getEventsList();
  }

  private getEventsList() {
    if(this.city == "" || this.scope == 0) return;

    let start = new Date();
    let end = new Date();

    if(this.scope == 1) // today (from now on)
    {
      end.setHours(23);
      end.setMinutes(59);
      end.setSeconds(59);
    }
    else if(this.scope == 2) { // week (from now on)
      end.setTime(+start + (7*24*3600));
    }
    else { // all (from now on)
      start.setTime(0);
      end.setTime(2147483647);
    }

    this.eventsServce.list('public', this.city, +start, +end, this.page, this.limit).subscribe(val => this.populateEventsList(val));
  }

  private populateEventsList(value : Event[]) {
    this.eventslist = value;

    setTimeout(function() {
      let $event_image_img = $(".event-image img");
      $(".event-image-cover").width($event_image_img.width() + 1).height($event_image_img.height() + 1);
    }, 200);
  }

}
