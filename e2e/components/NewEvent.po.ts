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
  private EVENT_VISIBILITY = by.id('eventVisibility');
  private EVENT_UPLOAD = by.id('uploadBtn');
  private EVENT_PUBLIC_SETTINGS = by.css('[header="Ustawienia publiczne"]');
  private EVENT_PUBLIC_COMMENTS = by.css('[header="Komentarze"]');
  private EVENT_DETAILS_COMMENTS = by.css('[aria-controls="comments"]');
  private EVENT_DETAILS_REGISTER = by.css('[aria-controls="register"]');
  private EVENT_DETAILS_REMEMBER = by.css('[for="remember"]');
  private EVENT_TITLE=by.css(".event-title h1");
  private EVENT_COMMENT_BODY=by.id("komentarz_tresc");
  private EVENT_ADD_COMMENT=by.id("addComment");
  private EVENT_DETAILS_COMMENT_REPLAY=by.className("fa-reply");
  private EVENT_COMMENTS_LIST=by.css("calendar-edit-events-comment article");
  private EVENT_USERS_LIST_HEADER=by.css("p-header");
  private EVENT_DETAILS_REGISTER_USER=by.id("enroll-submit");
  private EVENT_USERS_LIST=by.css("calendar-edit-events-users-list li");
  private EVENT_REMOVE=by.className("fa-trash-o");


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
    this.removeTextFromElement(this.EVENT_NAME);
    this.putTextIntoElement(this.EVENT_NAME, event);
  }

  public setLocName(loc: string) {
    this.removeTextFromElement(this.LOC_NAME);
    this.putTextIntoElement(this.LOC_NAME, loc);
  }

  public setLocCity(loc: string) {
    this.removeTextFromElement(this.LOC_CITY);
    this.putTextIntoElement(this.LOC_CITY, loc);
  }

  public setLocStreet(loc: string) {
    this.removeTextFromElement(this.LOC_STREET);
    this.putTextIntoElement(this.LOC_STREET, loc);
  }

  public setLocNumber(loc: string) {
    this.removeTextFromElement(this.LOC_NUM);
    this.putTextIntoElement(this.LOC_NUM, loc);
  }

  public setEventDescription(loc: string) {
    this.removeTextFromElement(this.EVENT_DESCRIPTION);
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

  public clickEditEventFromList(number: number) {
    return this.componentElementAll(this.EVENTS_LIST).get(number).click();
  }

  public getEditEventFromList(number: number) {
    return this.componentElementAll(this.EVENTS_LIST).get(number).getText();
  }

  public clickPublicEvent() {
    return this.clickElement(this.EVENT_VISIBILITY);
  }

  public clickPublicSettingsOfEvent() {
    return this.clickElement(this.EVENT_PUBLIC_SETTINGS);
  }

  public clickUploadImage() {
    let uri = "C:/Users/arek50/Desktop/kuchnie/kuchnia.jpg";
    return this.putTextIntoElement(this.EVENT_UPLOAD, uri);
  }

  public clickNewEvent(eventTitle: string) {
    return this.clickElement(by.cssContainingText('.event-title', eventTitle));
  }

  public getEventTitle() {
    return this.getText(this.EVENT_TITLE);
  }

  public setCommentBody(text:string) {
    return this.putTextIntoElement(this.EVENT_COMMENT_BODY,text);
  }

  public static buildComponent() {
    return new NewEvent(by.id('app-root'));
  }

  public clickCommentsForEvent() {
    return this.clickElement(this.EVENT_PUBLIC_COMMENTS);
  }
  public clickAddComment() {
    return this.clickElement(this.EVENT_ADD_COMMENT);
  }
  public clickCommentsFromEventDetails() {
    return this.clickElement(this.EVENT_DETAILS_COMMENTS);
  }
  public clickCommentReplayFromEventDetails() {
    return this.clickElement(this.EVENT_DETAILS_COMMENT_REPLAY);
  }
  public getComments() {
    return this.componentElementAll(this.EVENT_COMMENTS_LIST);
  }

  public clickUserListForEvent() {
    return this.clickElement(this.EVENT_USERS_LIST_HEADER);
  }
  public clickRegisterForEvent() {
    return this.clickElement(this.EVENT_DETAILS_REGISTER);
  }
  public clickRegisterUser() {
    this.clickElement(this.EVENT_DETAILS_REMEMBER);
    return this.clickElement(this.EVENT_DETAILS_REGISTER_USER);
  }
  public getUsersList() {
    return this.componentElementAll(this.EVENT_USERS_LIST);
  }

  public clickRemoveEvent() {
    this.clickElement(this.EVENT_REMOVE);
  }
}

