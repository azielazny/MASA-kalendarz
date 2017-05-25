import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarBackofficeComponent } from './calendar-backoffice.component';

describe('CalendarBackofficeComponent', () => {
  let component: CalendarBackofficeComponent;
  let fixture: ComponentFixture<CalendarBackofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarBackofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
