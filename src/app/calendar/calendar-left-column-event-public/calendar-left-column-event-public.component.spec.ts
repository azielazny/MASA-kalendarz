import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import {CalendarLeftColumnEventPublicComponent} from "./calendar-left-column-event-public.component";

describe('CalendarLeftColumnEventPublicComponent', () => {
  let component: CalendarLeftColumnEventPublicComponent;
  let fixture: ComponentFixture<CalendarLeftColumnEventPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarLeftColumnEventPublicComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarLeftColumnEventPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

