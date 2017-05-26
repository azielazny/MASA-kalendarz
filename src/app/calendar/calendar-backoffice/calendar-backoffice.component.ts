import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-calendar-backoffice',
  templateUrl: 'calendar-backoffice.component.html',
  styleUrls: ['calendar-backoffice.component.scss']
})
export class CalendarBackofficeComponent implements OnInit {

  constructor(private router: Router) {}

  @ViewChild('leftColumn') public leftColumn;

  ngOnInit() {
  }

}
