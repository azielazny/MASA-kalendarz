import {by} from 'protractor';
import {By} from 'selenium-webdriver';
import {BaseWebControl} from "../base/BaseWebControl";
import {browser} from "protractor";
import {LoginData} from "../test_data";


export class NewEvent extends BaseWebControl {


  private EVENT_NAME = by.css('.calEditBody #eventName');
  private LOC_CITY = by.css('.calEditBody #locCity');
  private LOC_NAME = by.css('.calEditBody #locName');
  private LOC_STREET = by.css('.calEditBody #locStreet');
  private LOC_NUM = by.css('.calEditBody #locNum');
  private ADD_EVENT_BUTTON = by.css('app-calendar-backoffice #rightColumn .addEvent');
  private SHOW_DROPDOWN_CATEGORY_LIST_BUTTON = by.css('.editFormCategories .fa-caret-down');
  private DROPDOWN_CATEGORY_LIST_LAST_ELEMENT = by.css('.editFormCategories .dropdownCategoryList:last-of-type');
  private EVENT_DESCRIPTION = by.css('.calEditBody #eventDescription');
  private EVENT_SAVE = by.css('.calEditBody .mainNavBox .fa-save');
  private EVENT_EDIT_CLOSE = by.id('closeEditCal');
  private EVENTS_LIST = by.css('app-calendar-backoffice #rightColumn .eventBox');
  private CLOSE_RIGHT_COLUMN = by.css('#rightColumn .fa-close');


  constructor(public rootLocator: By) {
    super(rootLocator);
  }

  public logout() {
    this.clearLocalStorage();
  }


  public clickDayOfMonth(nextday: number) {
    let now = new Date().getDate();
    let plusMinus = (now > 28) ? now - 1 - nextday : now - 1 + nextday;
    return this.componentElementAll(by.css('.lCard')).get(plusMinus).click();
  }

  public getEventsListAll() {
    return this.componentElementAll(this.EVENTS_LIST);
  }

  public clickAddEventButton() {
    return this.clickElement(this.ADD_EVENT_BUTTON);
  }

  public clickLastCategoryOfCategoryList() {
    return this.clickElement(this.DROPDOWN_CATEGORY_LIST_LAST_ELEMENT);
  }

  public clickShowCategoryListButton() {
    return this.clickElement(this.SHOW_DROPDOWN_CATEGORY_LIST_BUTTON);
  }

  public setEventName(event: string) {
    this.putTextIntoElement(this.EVENT_NAME, event);
  }

  public setLocName(loc:string) {
    this.putTextIntoElement(this.LOC_NAME, loc);
  }

  public setLocCity(loc:string) {
    this.putTextIntoElement(this.LOC_CITY, loc);
  }

  public setLocStreet(loc:string) {
    this.putTextIntoElement(this.LOC_STREET, loc);
  }

  public setLocNumber(loc:string) {
    this.putTextIntoElement(this.LOC_NUM, loc);
  }

  public setEventDescription(loc:string) {
    this.putTextIntoElement(this.EVENT_DESCRIPTION, loc);
  }

  public clickSaveEventButton() {
    return this.clickElement(this.EVENT_SAVE);
  }

  public clickCloseEditEventButton() {
    return this.clickElement(this.EVENT_EDIT_CLOSE);
  }

  public clickCloseRightColumnButton() {
    return this.clickElement(this.CLOSE_RIGHT_COLUMN);
  }

  public static buildComponent() {
    return new NewEvent(by.id('app-root'));
  }


}

