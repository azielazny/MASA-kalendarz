import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {CalendarEditEventsComponent} from "./calendar-edit-events.component";

describe('CalendarEditEventsComponent', () => {
  let component: CalendarEditEventsComponent;
  let fixture: ComponentFixture<CalendarEditEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEditEventsComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEditEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
