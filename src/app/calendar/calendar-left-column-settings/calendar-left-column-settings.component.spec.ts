import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {CalendarLeftColumnSettingsComponent} from "./calendar-left-column-settings.component";

describe('CalendarLeftColumnSettingsComponent', () => {
  let component: CalendarLeftColumnSettingsComponent;
  let fixture: ComponentFixture<CalendarLeftColumnSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarLeftColumnSettingsComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarLeftColumnSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

