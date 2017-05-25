import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListSearchbarComponent } from './events-list-searchbar.component';

describe('EventsListSearchbarComponent', () => {
  let component: EventsListSearchbarComponent;
  let fixture: ComponentFixture<EventsListSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
