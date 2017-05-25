import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {CalendarEditEventsMenuComponent} from "./calendar-edit-events-menu.component";

describe('CalendarEditEventsMenuComponent', () => {
  let component: CalendarEditEventsMenuComponent;
  let fixture: ComponentFixture<CalendarEditEventsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEditEventsMenuComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEditEventsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
