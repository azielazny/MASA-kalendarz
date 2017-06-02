import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsCommentComponent } from './event-details-comment.component';

describe('EventDetailsCommentComponent', () => {
  let component: EventDetailsCommentComponent;
  let fixture: ComponentFixture<EventDetailsCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailsCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
