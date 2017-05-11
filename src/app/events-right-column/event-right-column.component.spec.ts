import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsRightColumnComponent } from './event-right-column.component';

describe('EventsRightColumnComponent', () => {
  let component: EventsRightColumnComponent;
  let fixture: ComponentFixture<EventsRightColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsRightColumnComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsRightColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
