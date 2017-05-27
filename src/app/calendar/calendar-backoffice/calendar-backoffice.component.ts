import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-calendar-backoffice',
  templateUrl: 'calendar-backoffice.component.html',
  styleUrls: ['calendar-backoffice.component.scss']
})
export class CalendarBackofficeComponent implements OnInit {

  constructor(private router: Router, private title: Title) {
    this.title.setTitle("Twój Organizer - makeplan.");
  }

  @ViewChild('leftColumn') public leftColumn;

  ngOnInit() {
  }

}
