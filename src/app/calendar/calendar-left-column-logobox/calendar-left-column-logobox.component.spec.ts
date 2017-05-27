import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {CalendarLeftColumnLogoboxComponent} from "./calendar-left-column-logobox.component";

describe('CalendarLeftColumnLogoboxComponent', () => {
  let component: CalendarLeftColumnLogoboxComponent;
  let fixture: ComponentFixture<CalendarLeftColumnLogoboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarLeftColumnLogoboxComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarLeftColumnLogoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
