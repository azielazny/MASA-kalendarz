import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDetailsCommentComponent } from './events-details-comment.component';

describe('EventsDetailsCommentComponent', () => {
  let component: EventsDetailsCommentComponent;
  let fixture: ComponentFixture<EventsDetailsCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsDetailsCommentComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDetailsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
