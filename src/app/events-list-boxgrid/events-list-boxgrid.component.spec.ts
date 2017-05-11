import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListBoxgridComponent } from './events-list-boxgrid.component';

describe('EventsListBoxgridComponent', () => {
  let component: EventsListBoxgridComponent;
  let fixture: ComponentFixture<EventsListBoxgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListBoxgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListBoxgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
