import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowMakeComponent } from './how-make.component';

describe('HowMakeComponent', () => {
  let component: HowMakeComponent;
  let fixture: ComponentFixture<HowMakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowMakeComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
