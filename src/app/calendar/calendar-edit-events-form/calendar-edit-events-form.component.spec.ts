import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {CalendarEditEventsFormComponent} from "./calendar-edit-events-form.component";

describe('CalendarEditEventsFormComponent', () => {
  let component: CalendarEditEventsFormComponent;
  let fixture: ComponentFixture<CalendarEditEventsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEditEventsFormComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEditEventsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
