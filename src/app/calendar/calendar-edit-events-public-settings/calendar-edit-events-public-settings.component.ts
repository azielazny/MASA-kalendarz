import {Component, OnInit, Input, OnChanges, AfterViewInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {User} from "../../class/user.class";
import {Event} from "../../class/event.class";


@Component({
  selector: 'calendar-edit-events-public-settings',
  templateUrl: 'calendar-edit-events-public-settings.component.html',
  styleUrls: ['calendar-edit-events-public-settings.component.scss']
})
export class CalendarEditEventsPublicSettingsComponent implements OnChanges{
  private eventImage:string;

  @Input()
  public eventdata: Event;

  @ViewChild('uploadBtn') uploadBtn;
  @Output() pictureChange = new EventEmitter();

  constructor() {
  }

  ngOnChanges() {
    this.eventImage=this.eventdata.picture;
  }
  fileChanged($event) : void {
    this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    let file:File = inputValue.files[0];
    let reader:FileReader = new FileReader();

    reader.onloadend = (e) => {
      this.eventImage= reader.result;
      this.pictureChange.emit(reader.result)
    }
    reader.readAsDataURL(file);
  }
}
