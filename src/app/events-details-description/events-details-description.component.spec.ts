import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDetailsDescriptionComponent } from './events-details-description.component';

describe('EventsDetailsDescriptionComponent', () => {
  let component: EventsDetailsDescriptionComponent;
  let fixture: ComponentFixture<EventsDetailsDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsDetailsDescriptionComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDetailsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
