import {by} from 'protractor';
import {By} from 'selenium-webdriver';
import {BaseWebControl} from "../base/BaseWebControl";
import {browser} from "protractor";
import {LoginData} from "../test_data";


export class CalendarGrid extends BaseWebControl {

  private months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];

  private MONTH_NAME = by.id('calData');
  private PREV_MONTH_BUTTON = by.id('calPrev');
  private NEXT_MONTH_BUTTON = by.id('calNext');


  constructor(public rootLocator: By) {
    super(rootLocator);
  }

  public logout() {
    this.clearLocalStorage();
  }

  public getMonthIndex() {
    return this.getText(this.MONTH_NAME).then(m => {
      let newmonth=m.split(" ");
      return this.months.indexOf(newmonth[0])
    });

  }

  public clickAlertPrevButton() {
    return this.clickElement(this.PREV_MONTH_BUTTON);
  }

  public clickAlertNextButton() {
    return this.clickElement(this.NEXT_MONTH_BUTTON);
  }


  public static buildComponent() {
    return new CalendarGrid(by.id('app-root'));
  }


}

