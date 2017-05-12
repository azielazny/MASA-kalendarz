import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsTabEnrollComponent } from './event-details-tab-enroll.component';

describe('EventDetailsTabEnrollComponent', () => {
  let component: EventDetailsTabEnrollComponent;
  let fixture: ComponentFixture<EventDetailsTabEnrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailsTabEnrollComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsTabEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
