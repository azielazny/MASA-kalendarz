import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {CalendarLeftColumComponent} from "./calendar-left-column.component";

describe('CalendarLeftColumComponent', () => {
  let component: CalendarLeftColumComponent;
  let fixture: ComponentFixture<CalendarLeftColumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarLeftColumComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarLeftColumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

