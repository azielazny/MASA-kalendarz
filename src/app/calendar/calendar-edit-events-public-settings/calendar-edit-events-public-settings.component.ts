import {Component, OnInit, Input, OnChanges, AfterViewInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {User} from "../../class/user.class";


@Component({
  selector: 'calendar-edit-events-public-settings',
  templateUrl: 'calendar-edit-events-public-settings.component.html',
  styleUrls: ['calendar-edit-events-public-settings.component.scss']
})
export class CalendarEditEventsPublicSettingsComponent  {
  private eventImage:string;


  constructor() {
  }
  @ViewChild('uploadBtn') uploadBtn;
  @Output() pictureChange = new EventEmitter();

  // fileChanged(e) {
  //   if(this.uploadBtn.nativeElement.files.length != 1) return;
  //   let x = this;
  //
  //   let reader = new FileReader();
  //   reader.onloadend = function() {
  //     this.picture=
  //     x.pictureChange.emit(reader.result);
  //   };
  //   reader.readAsDataURL(this.uploadBtn.nativeElement.files[0]);
  // }

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
