import {Component, OnInit, Input} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../class/category.class";


@Component({
  selector: 'calendar-left-column-categories-list',
  templateUrl: 'calendar-left-column-categories-list.component.html',
  styleUrls: ['calendar-left-column-categories.component.scss']
})
export class CalendarLeftColumnCategoriesListComponent implements OnInit {
  public username:string = localStorage.getItem("userName");


  @Input()
  public categorydata : Category;

  @Input()
  public parent;

  constructor() {}


  ngOnInit() {
  }

  


}

