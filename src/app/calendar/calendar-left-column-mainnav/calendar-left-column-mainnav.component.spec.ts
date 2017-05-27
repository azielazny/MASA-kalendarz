import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {CalendarLeftColumnMainnavComponent} from "./calendar-left-column-mainnav.component";

describe('CalendarLeftColumnMainnavComponent', () => {
  let component: CalendarLeftColumnMainnavComponent;
  let fixture: ComponentFixture<CalendarLeftColumnMainnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarLeftColumnMainnavComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarLeftColumnMainnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

