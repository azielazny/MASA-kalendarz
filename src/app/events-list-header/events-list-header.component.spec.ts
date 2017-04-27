import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListHeaderComponent } from './events-list-header.component';

describe('EventsListHeaderComponent', () => {
  let component: EventsListHeaderComponent;
  let fixture: ComponentFixture<EventsListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
