import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {CalendarLeftColumnCategoriesListComponent} from "./calendar-left-column-categories-list.component";

describe('CalendarLeftColumnCategoriesComponent', () => {
  let component: CalendarLeftColumnCategoriesListComponent;
  let fixture: ComponentFixture<CalendarLeftColumnCategoriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarLeftColumnCategoriesListComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarLeftColumnCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

