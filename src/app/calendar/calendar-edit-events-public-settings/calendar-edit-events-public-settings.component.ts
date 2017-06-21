import {Component, OnInit, Input, OnChanges, AfterViewInit} from '@angular/core';
import {User} from "../../class/user.class";


@Component({
  selector: 'calendar-edit-events-public-settings',
  templateUrl: 'calendar-edit-events-public-settings.component.html',
  styleUrls: ['calendar-edit-events-public-settings.component.scss']
})
export class CalendarEditEventsPublicSettingsComponent {

  private eventImage: string;

  constructor() {
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    let file:File = inputValue.files[0];
    let myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.eventImage= myReader.result;
    }
    myReader.readAsDataURL(file);
  }
}
