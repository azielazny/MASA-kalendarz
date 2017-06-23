import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {settings} from "cluster";

@Component({
  selector: 'app-calendar-backoffice',
  templateUrl: 'calendar-backoffice.component.html',
  styleUrls: ['calendar-backoffice.component.scss']
})
export class CalendarBackofficeComponent implements OnInit {
  public username = localStorage.getItem("userName");

  constructor(private router: Router, private title: Title) {
    if (this.username == null) {
      this.router.navigate(['index']);
    }
    this.title.setTitle("Twój Organizer - makeplan.");
  }

  @ViewChild('leftColumn') public leftColumn;
  @ViewChild('grid') public grid;

  ngOnInit() {
    if (window.innerWidth <= 767) this.leftColumn.logoBox.showShortView = true;

  }

  public showSettings() {
    this.grid.editEvents.shown = true;
    this.grid.editEvents.tab = 'settings';
  }

}
