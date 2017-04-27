import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCentralComponent } from './main-page-central.component';

describe('MainPageCentralComponent', () => {
  let component: MainPageCentralComponent;
  let fixture: ComponentFixture<MainPageCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
