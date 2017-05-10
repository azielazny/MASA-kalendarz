import {Component, OnInit, Input} from '@angular/core';
import {Event} from '../class/event.class';
import {Router} from "@angular/router";

@Component({
  selector: 'app-events-right-column',
  templateUrl: './event-right-column.component.html',
  styleUrls: ['./event-right-column.component.scss']
})
export class EventsRightColumnComponent implements OnInit {


  @Input()
  private eventdata: Event;

  public location: string;
  public title: string;
  public time1: string;
  public time2: string;
  public date: string;
  public image: string;

  constructor(private router: Router) {}

  ngOnInit() {
    let x = new Date(this.eventdata.start_ts * 1000);

    let day = x.getDate();
    let day_s : string = day.toString();
    if(day < 10) day_s = '0' + day.toString();

    let month = x.getMonth() + 1;
    let month_s : string = month.toString();
    if(month < 10) month_s = '0' + month.toString();

    this.date = day_s + '-' + month_s + '-' + x.getFullYear().toString();

    let y = new Date(this.eventdata.end_ts * 1000);

    let h1 = x.getHours(), h2 = y.getHours();
    let m1 = x.getMinutes(), m2 = y.getMinutes();

    let h1_s = h1.toString(), h2_s = h2.toString();
    let m1_s = m1.toString(), m2_s = m2.toString();

    if(h1 < 10) h1_s = '0' + h1.toString();
    if(h2 < 10) h2_s = '0' + h2.toString();
    if(m1 < 10) m1_s = '0' + m1.toString();
    if(m2 < 10) m2_s = '0' + m2.toString();

    this.time1 = h1_s + ':' + m1_s;
    this.time2 = h2_s + ':' + m2_s;

    this.location = (this.eventdata.loc_name + ', ' + this.eventdata.loc_street + ' ' + this.eventdata.loc_bnum + ', ' + this.eventdata.loc_city).toUpperCase();

  }

}
