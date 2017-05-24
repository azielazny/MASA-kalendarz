import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {CalendarLeftColumnLogoutComponent} from "./calendar-left-column-logout.component";

describe('CalendarLeftColumnLogoutComponent', () => {
  let component: CalendarLeftColumnLogoutComponent;
  let fixture: ComponentFixture<CalendarLeftColumnLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarLeftColumnLogoutComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarLeftColumnLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

