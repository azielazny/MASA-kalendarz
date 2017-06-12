import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'calendar-edit-events-form',
  templateUrl: 'calendar-edit-events-form.component.html',
  styleUrls: ['calendar-edit-events-form.component.scss']
})
export class CalendarEditEventsFormComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) {}


  ngOnInit() {
    //('.collapsed').collapse();
  }

}
