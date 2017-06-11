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

  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.list().subscribe(val => {
      if (val.length == 0) {
        return;
      }
       this.categories = val;
    });
    console.log(this.categories);
  }


  ngOnInit() {
  }

  addCategory() {
    let categoryName = $('[name=categoryName]').val();
    let categoryColor = $('[name=categoryColor]').val();

    this.categoriesService.add(categoryName, categoryColor).subscribe(val => {
      $('[name=categoryName]').val('');

      this.categoriesService.list().subscribe(val => {
        if(val.length == 0)
        { return; }

        this.categories = val;
      });
    });
  }

  removeCategory(categoryId:number) {
    let categoryColor = $('[name=categoryColor]').val();
    this.categoriesService.remove(categoryId).subscribe(val => {
      this.categoriesService.list().subscribe(val => {
        if(val.length == 0)
        { return; }

        this.categories = val;
      });
    });
  }


}

