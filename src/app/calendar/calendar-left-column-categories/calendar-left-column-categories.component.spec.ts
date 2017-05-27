import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {CalendarLeftColumnCategoriesComponent} from "./calendar-left-column-categories.component";

describe('CalendarLeftColumnCategoriesComponent', () => {
  let component: CalendarLeftColumnCategoriesComponent;
  let fixture: ComponentFixture<CalendarLeftColumnCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarLeftColumnCategoriesComponent ]
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
});

