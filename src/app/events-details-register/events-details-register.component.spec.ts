import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDetailsRegisterComponent } from './events-details-register.component';

describe('EventsDetailsRegisterComponent', () => {
  let component: EventsDetailsRegisterComponent;
  let fixture: ComponentFixture<EventsDetailsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsDetailsRegisterComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDetailsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
