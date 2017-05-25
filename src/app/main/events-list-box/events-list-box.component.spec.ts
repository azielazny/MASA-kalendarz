import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListBoxComponent } from './events-list-box.component';

describe('EventsListBoxComponent', () => {
  let component: EventsListBoxComponent;
  let fixture: ComponentFixture<EventsListBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
