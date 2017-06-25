import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetComponent } from './weather-widget.component';
import {Event} from "../../class/event.class";
import {Component} from "@angular/core";

fdescribe('WeatherWidgetComponent', () => {
  let component: WeatherWidgetComponent;
  let fixture: ComponentFixture<WeatherWidgetComponent>;
  let fixture2: ComponentFixture<TestComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponentWrapper,WeatherWidgetComponent ]
    })
    .compileComponents();
    fixture2 = TestBed.createComponent(TestComponentWrapper);
    component = fixture2.debugElement.children[0].componentInstance;
    fixture2.detectChanges();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(WeatherWidgetComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should do math", () => {
    expect(1 + 1).toEqual(2);

    expect(5).toBeGreaterThan(4);
  });
});



@Component({
  selector: 'weather-widget-component',
  template: '<weather-widget [eventdata]="eventdata" class="col-xs-12 weatherWidgetForEdit"></weather-widget>'
})
class TestComponentWrapper {
 eventdata: Event=new Event();
}
