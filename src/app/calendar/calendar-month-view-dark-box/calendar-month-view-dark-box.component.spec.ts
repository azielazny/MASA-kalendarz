import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMonthViewDarkBoxComponent} from './calendar-month-view-dark-box.component';

describe('CalendarMonthViewDarkBoxComponent', () => {
  let component: CalendarMonthViewDarkBoxComponent;
  let fixture: ComponentFixture<CalendarMonthViewDarkBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarMonthViewDarkBoxComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMonthViewDarkBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
