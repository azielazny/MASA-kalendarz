import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {CalendarEditEventsPublicSettingsComponent} from "./calendar-edit-events-public-settings.component";

describe('CalendarEditEventsUsersListComponent', () => {
  let component: CalendarEditEventsPublicSettingsComponent;
  let fixture: ComponentFixture<CalendarEditEventsPublicSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEditEventsPublicSettingsComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEditEventsPublicSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
