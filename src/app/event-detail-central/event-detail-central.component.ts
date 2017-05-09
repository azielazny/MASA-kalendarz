import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event-detail-central',
  templateUrl: 'event-detail-central.component.html',
  styleUrls: ['event-detail-central.component.scss']
})
export class EventDetailCentralComponent implements OnInit {
  private sub: any;      // -> Subscriber
  private mode: string;

  constructor(public route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    // get URL parameters
    this.sub = this.route
      .params
      .subscribe(params => {this.mode = params['id'];});

  }
}
