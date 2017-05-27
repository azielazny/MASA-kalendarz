import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarRightColumnComponent } from './calendar-right-column.component';

describe('CalendarRightColumnComponent', () => {
  let component: CalendarRightColumnComponent ;
  let fixture: ComponentFixture<CalendarRightColumnComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarRightColumnComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarRightColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
