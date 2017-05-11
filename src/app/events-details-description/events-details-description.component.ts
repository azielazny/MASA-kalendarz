import {Component, OnInit, Input} from '@angular/core';
import {Event} from '../class/event.class';
import {Router} from "@angular/router";

@Component({
  selector: 'app-events-details-description',
  templateUrl: './events-details-description.component.html',
  styleUrls: ['./events-details-description.component.scss']
})
export class EventsDetailsDescriptionComponent implements OnInit {

  @Input()
  private eventdata: Event;
  
  constructor(private router: Router) {}

  ngOnInit() {
  }

}
