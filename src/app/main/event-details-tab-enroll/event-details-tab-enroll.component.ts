import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'app-event-details-tab-enroll',
  templateUrl: 'event-details-tab-enroll.component.html',
  styleUrls: ['event-details-tab-enroll.component.scss']
})
export class EventDetailsTabEnrollComponent implements OnInit {

  @Input()
  public eventdata: Event;

  public id = -1;
  public enrolled = false;

  constructor(private eventsService: EventsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      // first check logged in status
      if(window.localStorage.getItem('loggedAs') != null) {
        this.eventsService.enrolled(this.id).subscribe(val => this.enrolled = val);
      }
      else {
        let x = window.localStorage.getItem('enrolledEvents');

        if(x == null) { this.enrolled = false; return; }

        let y = JSON.parse(x);
        if(y.enrolled.indexOf(this.id) == -1) { this.enrolled = false; return; }
        else { this.enrolled = true; }
      }
    });
  }

  ngOnInit() {
  }

  wishToEnroll() {
    if(window.localStorage.getItem('loggedAs') != null) {
      this.eventsService.enroll(this.id).subscribe(val => {
        this.enrolled = true;
        (<any>document.getElementById("remember")).checked = false;
      });
    }
    else {
      let x = window.localStorage.getItem('enrolledEvents');
      let y;
      if(x == null) { y = { enrolled: [] }; }

      y.enrolled.push(this.id);
      window.localStorage.setItem("enrolledEvents", JSON.stringify(y));

      this.enrolled = true;
      (<any>document.getElementById("remember")).checked = false;
    }
  }

  wishToDisenroll() {
    if(window.localStorage.getItem('loggedAs') != null) {
      this.eventsService.disenroll(this.id).subscribe(val => {
        this.enrolled = false;
      });
    }
    else {
      let x = window.localStorage.getItem('enrolledEvents');
      let y;
      if(x == null) { this.enrolled = false; return; }

      y = JSON.parse(x);

      // find index
      let index = y.enrolled.indexOf(this.id);

      if(index >= 0) {
        y.enrolled.splice(index, 1);
      }

      window.localStorage.setItem("enrolledEvents", JSON.stringify(y));

      this.enrolled = false;
    }
  }

}
