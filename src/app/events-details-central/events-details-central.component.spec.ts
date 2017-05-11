import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDetailsCentralComponent } from './events-details-central.component';

describe('EventsDetailsCentralComponent', () => {
  let component: EventsDetailsCentralComponent;
  let fixture: ComponentFixture<EventsDetailsCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsDetailsCentralComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDetailsCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
