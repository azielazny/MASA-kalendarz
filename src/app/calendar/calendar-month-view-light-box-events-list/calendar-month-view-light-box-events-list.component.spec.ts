import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMonthViewLightBoxEventsListComponent } from './calendar-month-view-light-box-events-list.component';

describe('CalendarMonthViewLightBoxEventsListComponent', () => {
  let component: CalendarMonthViewLightBoxEventsListComponent;
  let fixture: ComponentFixture<CalendarMonthViewLightBoxEventsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarMonthViewLightBoxEventsListComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMonthViewLightBoxEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
