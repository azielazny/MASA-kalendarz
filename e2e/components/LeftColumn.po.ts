import {by} from 'protractor';
import {By} from 'selenium-webdriver';
import {BaseWebControl} from "../base/BaseWebControl";
import {browser} from "protractor";
import {LoginData} from "../test_data";


export class LeftColumn extends BaseWebControl {

  private BARS_BUTTON = by.css('#leftColumn .fa-bars');
  private SHORT_VIEW = by.className('shortView');
  private SCROLL_DOWN_BUTTON = by.css('app-calendar-backoffice #leftColumn #newAlerts .fa-angle-down');
  private SCROLL_UP_BUTTON = by.css('app-calendar-backoffice #leftColumn #newAlerts .fa-angle-up');
  private ALERTS_TITLE_BUTTON = by.css('app-calendar-backoffice #leftColumn #newAlerts .info>span');
  private CATEGORY_INPUT_CATEGORY_COLOR_FIELD = by.css('app-calendar-backoffice #leftColumn #categoryList .input-group input[name=categoryColor]');
  private CATEGORY_INPUT_CATEGORY_NAME_FIELD = by.css('app-calendar-backoffice #leftColumn #categoryList .input-group input[name=categoryName]');
  private CATEGORY_SUBMIT_BUTTON = by.css('#leftColumn #categoryList .input-group .input-group-addon .fa-play');
  private CATEGORY_LIST = by.css('#leftColumn #categoryList calendar-left-column-categories-list');
  private CATEGORY_LIST_LAST_ELEMENT_NAME = by.css('#leftColumn #categoryList calendar-left-column-categories-list:last-of-type .actualCategory .catName');
  private CATEGORY_LIST_LAST_ELEMENT_DELETE = by.css('#leftColumn #categoryList calendar-left-column-categories-list:last-of-type .actualCategory .catDel');
  private GRID_CALENDAR_FIRST_DAY = by.css('app-calendar-backoffice #calendar .lCard:first-child');
  private ADD_EVENT_BUTTON = by.css('app-calendar-backoffice #rightColumn .addEvent');
  private SHOW_DROPDOWN_CATEGORY_LIST_BUTTON = by.css('.editFormCategories .fa-caret-down');
  private DROPDOWN_CATEGORY_LIST_LAST_ELEMENT = by.css('.dropdownCategoryList:last-of-type');
  private SETTINGS_BUTTON = by.id('calSettings');
  private PUBLIC_EVENTS_LINK_BUTTON = by.id('publicEventsLink');
  private SETTINGS_FIELD = by.css('.topNav.setTab.active');
  private LOGOUT_BUTTON = by.css('calendar-left-column-logout a');


  constructor(public rootLocator: By) {
    super(rootLocator);
  }

  public shortViewLeftColumn() {
    return this.componentElement(this.SHORT_VIEW);
  }

  public logout() {
    this.clearLocalStorage();
  }


  public clickBarsButton() {
    return this.clickElement(this.BARS_BUTTON);
  }

  public clickAlertPrevButton() {
    return this.clickElement(this.SCROLL_DOWN_BUTTON);
  }

  public clickAlertNextButton() {
    return this.clickElement(this.SCROLL_UP_BUTTON);
  }

  public alertFieldTitle() {
    return this.getText(this.ALERTS_TITLE_BUTTON);
  }

  public selectCategoryColor() {
    let elm = this.componentElement(this.CATEGORY_INPUT_CATEGORY_COLOR_FIELD);
    browser.executeScript("arguments[0].setAttribute('value', arguments[1]);", elm, "#fe2235");
  }

  public selectCategoryName() {
    return this.putTextIntoElement(this.CATEGORY_INPUT_CATEGORY_NAME_FIELD, "Nowa kategoria");
  }

  public clickCategorySubmitButton() {
    return this.clickElement(this.CATEGORY_SUBMIT_BUTTON);
  }

  public getLastCategoryName() {
    return this.getText(this.CATEGORY_LIST_LAST_ELEMENT_NAME);
  }

  public clickCategoryDeleteButton() {
    return this.clickElement(this.CATEGORY_LIST_LAST_ELEMENT_DELETE);
  }

  public getCategoryListAll() {
    return this.componentElementAll(this.CATEGORY_LIST);
  }

  public clickGridFirstDayButton() {
    return this.clickElement(this.GRID_CALENDAR_FIRST_DAY);
  }

  public clickAddEventButton() {
    return this.clickElement(this.ADD_EVENT_BUTTON);
  }

  public getLastCategoryOfCategoryList() {
    return this.getText(this.DROPDOWN_CATEGORY_LIST_LAST_ELEMENT);
  }

  public clickShowCategoryListButton() {
    return this.clickElement(this.SHOW_DROPDOWN_CATEGORY_LIST_BUTTON);
  }

  public clickSettingsButton() {
    return this.clickElement(this.SETTINGS_BUTTON);
  }

  public getSettingsPage() {
    return this.getText(this.SETTINGS_FIELD);
  }

  public getPublicEventsPage() {
    return this.clickElement(this.PUBLIC_EVENTS_LINK_BUTTON);
  }

  public clickLogoutButton() {
    return this.clickElement(this.LOGOUT_BUTTON);
  }

  public static buildComponent() {
    return new LeftColumn(by.id('app-root'));
  }


}

