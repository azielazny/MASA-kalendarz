import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';


import {CalendarLeftColumnCategoriesComponent} from "./calendar-left-column-categories.component";
import {EventsService} from "../../services/events.service";
import {CategoriesService} from "../../services/categories.service";
import {HttpModule, BaseRequestOptions, Http, Response, ResponseOptions} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {Category} from "../../class/category.class";
import {CalendarLeftColumnCategoriesListComponent} from "../calendar-left-column-categories-list/calendar-left-column-categories-list.component";
import {Component} from "@angular/core";
import {isUndefined} from "util";

fdescribe('CalendarLeftColumnCategoriesComponent', () => {
  let component: CalendarLeftColumnCategoriesComponent;
  let fixture: ComponentFixture<CalendarLeftColumnCategoriesComponent>;
  let fixture2: ComponentFixture<TestComponentWrapper>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        EventsService,
        CategoriesService,
        MockBackend,
        BaseRequestOptions,
        CalendarLeftColumnCategoriesComponent,
        {
          provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      declarations: [ CalendarLeftColumnCategoriesListComponent,CalendarLeftColumnCategoriesComponent, TestComponentWrapper ],
      imports: [
        HttpModule
      ],
      // exports: [CalendarLeftColumnCategoriesListComponent,CalendarLeftColumnCategoriesComponent]
    })
      .compileComponents();
    fixture2 = TestBed.createComponent(TestComponentWrapper);
    component = fixture2.debugElement.children[0].componentInstance;
    fixture2.detectChanges();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarLeftColumnCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return list of categroies', async(inject(
    [CalendarLeftColumnCategoriesComponent, MockBackend], (testObj: CalendarLeftColumnCategoriesComponent, mockBackend: MockBackend) => {
      /*given*/
      mockBackend.connections.subscribe((connection: MockConnection) => {
        const categories: Category[] = [{category_id: 11, color: "#fff", name: "kategoria", user_id: 11}];
        if(categories!=undefined) {const categoryName= categories[0].name;}
        connection.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(categories)})));
      });

      /*when*/
      const result = testObj.getCategoryList();
      if(result!=undefined) {const firstresultName=result[0].name;}

      /*then*/
          expect(result).toEqual(this.categories);
          // expect(result[0].color).toEqual(this.categories[0].color);
          expect(this.firstresultName).toEqual(this.categoryName);


    })));
});

@Component({
  selector: 'test-component-wrapper',
  template: '<calendar-left-column-categories [parent]="this"></calendar-left-column-categories>'
})
class TestComponentWrapper {
  parent=""
}
