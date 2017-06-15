import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEditEventsCommentsListComponent } from './calendar-edit-events-comments-list.component';

describe('CalendarEditEventsCommentsListComponent', () => {
  let component: CalendarEditEventsCommentsListComponent;
  let fixture: ComponentFixture<CalendarEditEventsCommentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEditEventsCommentsListComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEditEventsCommentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
