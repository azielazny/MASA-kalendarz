import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsTabCommentsComponent } from './event-details-tab-comments.component';

describe('EventDetailsTabCommentsComponent', () => {
  let component: EventDetailsTabCommentsComponent;
  let fixture: ComponentFixture<EventDetailsTabCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailsTabCommentsComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsTabCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
