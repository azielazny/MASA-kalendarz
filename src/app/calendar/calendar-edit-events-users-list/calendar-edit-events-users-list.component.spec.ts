import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {CalendarEditEventsUsersListComponent} from "./calendar-edit-events-users-list.component";

describe('CalendarEditEventsUsersListComponent', () => {
  let component: CalendarEditEventsUsersListComponent;
  let fixture: ComponentFixture<CalendarEditEventsUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEditEventsUsersListComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEditEventsUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
