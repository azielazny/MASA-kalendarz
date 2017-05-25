import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {CalendarEditEventsRightColumnComponent} from "./calendar-edit-events-right-column.component";

describe('CalendarEditEventsRightColumnComponent', () => {
  let component: CalendarEditEventsRightColumnComponent;
  let fixture: ComponentFixture<CalendarEditEventsRightColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEditEventsRightColumnComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEditEventsRightColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
