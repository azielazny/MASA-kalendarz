import {Component, OnInit, Input, OnChanges, AfterViewInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {User} from "../../class/user.class";


@Component({
  selector: 'calendar-edit-events-public-settings',
  templateUrl: 'calendar-edit-events-public-settings.component.html',
  styleUrls: ['calendar-edit-events-public-settings.component.scss']
})
export class CalendarEditEventsPublicSettingsComponent  {

  constructor() {
  }

  @ViewChild('uploadBtn') uploadBtn;

  @Output() pictureChange = new EventEmitter();

  fileChanged(e) {
    if(this.uploadBtn.nativeElement.files.length != 1) return;
    let x = this;

    let reader = new FileReader();
    reader.onloadend = function() {
      x.pictureChange.emit(reader.result);
    };
    reader.readAsDataURL(this.uploadBtn.nativeElement.files[0]);
  }

}
