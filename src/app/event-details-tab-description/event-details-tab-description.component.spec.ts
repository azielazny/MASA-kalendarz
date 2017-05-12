import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsTabDescriptionComponent } from './event-details-tab-description.component';

describe('EventDetailsTabDescriptionComponent', () => {
  let component: EventDetailsTabDescriptionComponent;
  let fixture: ComponentFixture<EventDetailsTabDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailsTabDescriptionComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsTabDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
