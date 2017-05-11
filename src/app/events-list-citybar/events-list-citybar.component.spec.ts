import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListCitybarComponent } from './events-list-citybar.component';

describe('EventsListCitybarComponent', () => {
  let component: EventsListCitybarComponent;
  let fixture: ComponentFixture<EventsListCitybarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListCitybarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListCitybarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
