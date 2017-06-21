import {Component, OnInit, Input, OnChanges, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {User} from "../../class/user.class";


@Component({
  selector: 'calendar-edit-events-public-settings',
  templateUrl: 'calendar-edit-events-public-settings.component.html',
  styleUrls: ['calendar-edit-events-public-settings.component.scss']
})
export class CalendarEditEventsPublicSettingsComponent {

  private eventImage: string;
  @Output() outputEventImage: EventEmitter<string> = new EventEmitter();

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
      this.outputEventImage.emit(myReader.result)
    }
    myReader.readAsDataURL(file);
  }
}
