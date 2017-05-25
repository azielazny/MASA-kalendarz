import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsRightColumnComponent } from './event-details-right-column.component';

describe('EventDetailsRightColumnComponent', () => {
  let component: EventDetailsRightColumnComponent;
  let fixture: ComponentFixture<EventDetailsRightColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailsRightColumnComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsRightColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
