import {Component, OnInit, Input} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../class/category.class";


@Component({
  selector: 'calendar-left-column-categories',
  templateUrl: './calendar-left-column-categories.component.html',
  styleUrls: ['./calendar-left-column-categories.component.scss']
})
export class CalendarLeftColumnCategoriesComponent implements OnInit {
  public username:string = localStorage.getItem("userName");

  @Input()
  public categories: Category[] = [];
  @Input()
  public parent;

  constructor(private categoriesService: CategoriesService) {
    this.getCategoryList();
  }

  public getCategoryList() {
    this.categoriesService.list().subscribe(val => {
      if (val.length == 0) return;
      this.categories = val;
      this.parent.parent.grid.rightColumn.getCategoryList();
      this.parent.parent.grid.monthGrid.getCategoryList();
      this.parent.parent.grid.editEvents.editEventsForm.getCategoryList();
    });
  }


  ngOnInit() {
    console.log(this.parent.parent.grid.rightColumn.xx)
  }

  addCategory() {
    let categoryName = $('[name=categoryName]').val();
    let categoryColor = $('[name=categoryColor]').val();

    this.categoriesService.add(categoryName, categoryColor).subscribe(val => {
      $('[name=categoryName]').val('');
      this.getCategoryList();

    });
  }

  removeCategory(categoryId:number) {
    let categoryColor = $('[name=categoryColor]').val();
    this.categoriesService.remove(categoryId).subscribe(val => {
      this.getCategoryList();
    });
  }


}

