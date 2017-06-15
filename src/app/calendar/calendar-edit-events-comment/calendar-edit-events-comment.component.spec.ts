import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEditEventsCommentComponent } from './calendar-edit-events-comment.component';

describe('CalendarEditEventsCommentComponent', () => {
  let component: CalendarEditEventsCommentComponent;
  let fixture: ComponentFixture<CalendarEditEventsCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEditEventsCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEditEventsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
