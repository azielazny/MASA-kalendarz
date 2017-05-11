import {Component, OnInit, Input} from '@angular/core';
import {Event} from '../class/event.class';
import {Router, ActivatedRoute} from "@angular/router";
import {EventsService} from "../services/events.service";

@Component({
  selector: 'app-events-details-central',
  templateUrl: './events-details-central.component.html',
  styleUrls: ['./events-details-central.component.scss']
})
export class EventsDetailsCentralComponent implements OnInit {
  @Input()
  private eventdata: Event;


  public title: string;
  public image: string;

  eva : Event;
  ev : Event;
  constructor(private eventService: EventsService, public route: ActivatedRoute, private router: Router) {

    this.ev = new Event();
    this.ev.event_id = 31;
    this.ev.user_id = 1;
    this.ev.title = "TEST TITLE111";
    this.ev.end_ts = 1496178000;
    this.ev.start_ts = 1494313200;
    this.ev.loc_name = "TEST NAME";
    this.ev.loc_street = "TEST STREET";
    this.ev.loc_bnum = "55";
    this.ev.loc_city = "CITY HERE WILL BE";

  }
  public id: number;
  private mode: string;
  private event: any;

  getEventsDetail() {
    this.eventService.details(this.id).subscribe(data => this.eva=data);//then(ev => this.event = ev);
    // console.log(this.ev.title.toString()+"qqqqqqqqq");

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getEventsDetail();
    this.title = "sdsdsdsd"+this.ev.title;//this.ev.title

    this.image = "https://masa.oustish.pl/events/image/";// + this.eventdata.event_id.toString();

    //   let x = new Date(this.eventdata.start_ts * 1000);
    //
    //   let day = x.getDate();
    //   let day_s : string = day.toString();
    //   if(day < 10) day_s = '0' + day.toString();
    //
    //   let month = x.getMonth() + 1;
    //   let month_s : string = month.toString();
    //   if(month < 10) month_s = '0' + month.toString();
    //
    //   this.date = day_s + '-' + month_s + '-' + x.getFullYear().toString();
    //
    //   let y = new Date(this.eventdata.end_ts * 1000);
    //
    //   let h1 = x.getHours(), h2 = y.getHours();
    //   let m1 = x.getMinutes(), m2 = y.getMinutes();
    //
    //   let h1_s = h1.toString(), h2_s = h2.toString();
    //   let m1_s = m1.toString(), m2_s = m2.toString();
    //
    //   if(h1 < 10) h1_s = '0' + h1.toString();
    //   if(h2 < 10) h2_s = '0' + h2.toString();
    //   if(m1 < 10) m1_s = '0' + m1.toString();
    //   if(m2 < 10) m2_s = '0' + m2.toString();
    //
    //   this.time1 = h1_s + ':' + m1_s;
    //   this.time2 = h2_s + ':' + m2_s;
    //
    //   this.location = (this.eventdata.loc_name + ', ' + this.eventdata.loc_street + ' ' + this.eventdata.loc_bnum + ', ' + this.eventdata.loc_city).toUpperCase();
    //
    //
    //
    //   $(window).resize(function () {
    //     let $event_image_img = $(".event-image img");
    //     $(".event-image-cover").width($event_image_img.width() + 1).height($event_image_img.height() + 1);
    //   });
    //
    //   let $event_image_img = $(".event-image img");
    //   $(".event-image-cover").width($event_image_img.width() + 1).height($event_image_img.height() + 1);
    //
  }

}
