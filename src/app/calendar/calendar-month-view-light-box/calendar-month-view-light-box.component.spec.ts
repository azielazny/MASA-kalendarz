import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMonthViewLightBoxComponent } from './calendar-month-view-light-box.component';

describe('CalendarMonthViewLightBoxComponent', () => {
  let component: CalendarMonthViewLightBoxComponent;
  let fixture: ComponentFixture<CalendarMonthViewLightBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarMonthViewLightBoxComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMonthViewLightBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
