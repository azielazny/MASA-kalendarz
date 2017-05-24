import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {CalendarLeftColumnInfoboxComponent} from "./calendar-left-column-infobox.component";

describe('CalendarLeftColumnInfoboxComponent', () => {
  let component: CalendarLeftColumnInfoboxComponent;
  let fixture: ComponentFixture<CalendarLeftColumnInfoboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarLeftColumnInfoboxComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCalendarLeftColumnInfoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

