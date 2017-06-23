import {Component, OnInit, Input} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {Event} from "../../class/event.class";

@Component({
  selector: 'calendar-left-column-infobox',
  templateUrl: 'calendar-left-column-infobox.component.html',
  styleUrls: ['calendar-left-column-infobox.component.scss']
})
export class CalendarLeftColumnInfoboxComponent implements OnInit {
  public username: string = localStorage.getItem("userName");

  private eventslist: Event[] = [];

  private title: string="";
  private description: string="";
  private counter: number = 0;

  constructor(private eventsService: EventsService) {
    this.eventsService.limitListForUser(5).subscribe(val => {
      this.infoboxData(val, 0);
    });
  }

  private infoboxData(value: Event[], index: number) {
    if(value.length>0) {
      this.eventslist = value;
      this.title = value[index].title;
      this.description = value[index].description;
      console.log(this.eventslist);
    }
  }


  ngOnInit() {
  }

  changeEventDataPrev() {
    let eventsCounter = this.eventslist.length - 1;

    if (this.counter - 1 < 0) {
      this.infoboxData(this.eventslist, eventsCounter);
      this.counter=eventsCounter;
    } else {
      this.infoboxData(this.eventslist, this.counter - 1);
      this.counter-=1;
    }
  }
  changeEventDataNext() {
    let eventsCounter = this.eventslist.length - 1;

    if (this.counter + 1 > eventsCounter) {
      this.infoboxData(this.eventslist, 0);
      this.counter=0;
    } else {
      this.infoboxData(this.eventslist, this.counter + 1);
      this.counter+=1;

    }
  }

}

