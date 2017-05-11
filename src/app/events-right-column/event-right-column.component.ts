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

  constructor(public route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
  }

}
