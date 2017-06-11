import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMonthViewWeekListComponent } from './calendar-month-view-week-list.component';

describe('CalendarMonthViewLightBoxComponent', () => {
  let component: CalendarMonthViewWeekListComponent;
  let fixture: ComponentFixture<CalendarMonthViewWeekListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarMonthViewWeekListComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMonthViewWeekListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
