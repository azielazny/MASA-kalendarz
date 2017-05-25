import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarTitleNavbarComponent } from './calendar-title-navbar.component';

describe('CalendarTitleNavbarComponent', () => {
  let component: CalendarTitleNavbarComponent;
  let fixture: ComponentFixture<CalendarTitleNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarTitleNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarTitleNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
