import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';


import {CalendarLeftColumnCategoriesComponent} from "./calendar-left-column-categories.component";
import {EventsService} from "../../services/events.service";
import {CategoriesService} from "../../services/categories.service";
import {HttpModule, BaseRequestOptions, Http, Response, ResponseOptions} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {Category} from "../../class/category.class";

describe('CalendarLeftColumnCategoriesComponent', () => {
  let component: CalendarLeftColumnCategoriesComponent;
  let fixture: ComponentFixture<CalendarLeftColumnCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        EventsService,
        CategoriesService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      declarations: [ CalendarLeftColumnCategoriesComponent ],
      imports: [
        HttpModule
      ]
    })
      .compileComponents();
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
        const categories: Category[] = [{category_id: 11, color: "#fff", name: "nazwa", user_id: 11}];
        connection.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(categories)})));
      });

      /*when*/
      const result = testObj.getCategoryList();

      /*then*/
          expect(component.categories.length).toEqual(1);
          expect(component.categories[0].color).toEqual("#fff");
          expect(component.categories[0].name).toEqual("nazwa");


    })));
});

