import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-events-details-register',
  templateUrl: './events-details-register.component.html',
  styleUrls: ['./events-details-register.component.scss']
})
export class EventsDetailsRegisterComponent implements OnInit {

  @Input()
  public eventdata: Event;

  constructor() { }

  ngOnInit() {
  }

}
