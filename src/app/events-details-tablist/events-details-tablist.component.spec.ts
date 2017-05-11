import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDetailsTablistComponent } from './events-details-tablist.component';

describe('EventsDetailsTablistComponent', () => {
  let component: EventsDetailsTablistComponent;
  let fixture: ComponentFixture<EventsDetailsTablistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsDetailsTablistComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDetailsTablistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

