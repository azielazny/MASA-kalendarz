import {Component, OnInit, Input} from '@angular/core';
import {Event} from '../class/event.class';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event-details-right-column',
  templateUrl: 'event-details-right-column.component.html',
  styleUrls: ['event-details-right-column.component.scss']
})
export class EventDetailsRightColumnComponent implements OnInit {
  @Input()
  private eventdata: Event;

  location: string = "";
  image: string = "";
  date1: string = "";
  date2: string = "";
  time1: string = "";
  time2: string = "";
  diff: string = "";

  constructor(public route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.image = "https://masa.oustish.pl/events/image/" + this.eventdata.event_id.toString();


    // czasy początku i końca (formatowanie)
    let x = new Date(this.eventdata.start_ts * 1000);

    let day1 = x.getDate();
    let day1_s: string = day1.toString();
    if (day1 < 10) day1_s = '0' + day1.toString();

    let month1 = x.getMonth() + 1;
    let month1_s: string = month1.toString();
    if (month1 < 10) month1_s = '0' + month1.toString();

    this.date1 = day1_s + '-' + month1_s + '-' + x.getFullYear().toString();

    let y = new Date(this.eventdata.end_ts * 1000);

    let day2 = y.getDate();
    let day2_s: string = day2.toString();
    if (day2 < 10) day2_s = '0' + day2.toString();

    let month2 = y.getMonth() + 1;
    let month2_s: string = month2.toString();
    if (month2 < 10) month2_s = '0' + month2.toString();

    this.date2 = day2_s + '-' + month2_s + '-' + y.getFullYear().toString();

    let h1 = x.getHours(), h2 = y.getHours();
    let m1 = x.getMinutes(), m2 = y.getMinutes();

    let h1_s = h1.toString(), h2_s = h2.toString();
    let m1_s = m1.toString(), m2_s = m2.toString();

    if (h1 < 10) h1_s = '0' + h1.toString();
    if (h2 < 10) h2_s = '0' + h2.toString();
    if (m1 < 10) m1_s = '0' + m1.toString();
    if (m2 < 10) m2_s = '0' + m2.toString();

    this.time1 = h1_s + ':' + m1_s;
    this.time2 = h2_s + ':' + m2_s;


    // długość trwania (formatowanie)
    let dif = this.eventdata.end_ts - this.eventdata.start_ts;
    let dif_days = Math.floor(dif / (24*3600));
    let dif_hours = Math.floor((dif - (dif_days*24*3600))/3600);
    let dif_minutes = Math.floor((dif - (dif_days*24*3600) - (dif_hours*3600))/60);
    let dif_seconds = dif - (dif_days*24*3600) - (dif_hours*3600) - (dif_minutes*60);

    this.diff = "";

    if(dif_days > 0)
      this.diff = dif_days + "d";

    if(dif_days > 0 && (dif_hours > 0 || dif_minutes > 0 || dif_seconds > 0))
      this.diff += " ";

    if(dif_hours > 0)
      this.diff += dif_hours + "h";

    if(dif_hours > 0 && (dif_minutes > 0 || dif_seconds > 0))
      this.diff += " ";

    if(dif_minutes > 0)
      this.diff += dif_minutes + "m";

    if(dif_minutes > 0 && dif_seconds > 0)
      this.diff += " ";

    if(dif_seconds > 0 || (dif_hours == 0 && dif_days == 0 && dif_minutes == 0))
      this.diff += dif_seconds + "s";



    // lokalizacja (formatowanie)
    this.location = "";

    if (this.eventdata.loc_name != null)
      this.location += this.eventdata.loc_name.trim() + ', ';

    if (this.eventdata.loc_street != null)
      this.location += this.eventdata.loc_street.trim();

    if (this.eventdata.loc_street != null && this.eventdata.loc_bnum != null)
      this.location += " ";

    if (this.eventdata.loc_bnum != null)
      this.location += this.eventdata.loc_bnum.trim();

    if ((this.eventdata.loc_street != null || this.eventdata.loc_bnum != null) && this.eventdata.loc_city != null)
      this.location += ', ';

    if (this.eventdata.loc_city != null)
      this.location += this.eventdata.loc_city.trim();

    this.location = this.location.toUpperCase();
  }

}
