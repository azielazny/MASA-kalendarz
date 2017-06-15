import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarRightColumnEventsListComponent } from './calendar-right-column-events-list.component';

describe('CalendarRightColumnComponent', () => {
  let component: CalendarRightColumnEventsListComponent ;
  let fixture: ComponentFixture<CalendarRightColumnEventsListComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarRightColumnEventsListComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarRightColumnEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
