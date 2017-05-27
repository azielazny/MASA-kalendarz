import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsCentralComponent } from './event-details-central.component';

describe('EventDetailsCentralComponent', () => {
  let component: EventDetailsCentralComponent;
  let fixture: ComponentFixture<EventDetailsCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailsCentralComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
