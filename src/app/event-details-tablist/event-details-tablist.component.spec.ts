import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsTablistComponent } from './event-details-tablist.component';

describe('EventDetailsTablistComponent', () => {
  let component: EventDetailsTablistComponent;
  let fixture: ComponentFixture<EventDetailsTablistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailsTablistComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsTablistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

