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

  public description: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.description = "opis"; //this.eventdata.description;

  
  }

}
