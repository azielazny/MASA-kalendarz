import {Component, OnInit, Input} from '@angular/core';
import {Event} from '../class/event.class';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-events-right-column',
  templateUrl: './event-right-column.component.html',
  styleUrls: ['./event-right-column.component.scss']
})
export class EventsRightColumnComponent implements OnInit {
  @Input()
  private eventdata: Event;
  private events: Event[] = [];

  location: string = "";

  constructor(public route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.events.push(this.eventdata);



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
