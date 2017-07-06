import {browser} from "protractor";
import {LoginData} from "../test_data"
import {MainPage} from "../components/MainPage.po";
import {NewEvent} from "../components/NewEvent.po";


describe('Masa Kalendarz New Event', () => {

  let newEvent = NewEvent.buildComponent();
  let mainPage = MainPage.buildComponent();

  beforeAll(() => {
    browser.get(browser.baseUrl);
    browser.sleep(2000);
    mainPage.clickLoginButton();
    browser.sleep(2000);
    mainPage.loginAsUser();
    browser.sleep(2000);
  });

  beforeEach(() => {
    browser.get("/calendar");
    browser.sleep(2000);
  });

  afterAll(() => {
    mainPage.logout();
  });

  it('Is should add the new event and update grid of calendar', () => {
    newEvent.clickDayOfMonth(0);
    browser.sleep(2000);
    let eventsListCounter = newEvent.getEventsListAll().count().then((result) => {
      return result + 1
    });
    newEvent.clickAddEventButton();
    newEvent.clickShowCategoryListButton();
    browser.sleep(1000);
    newEvent.clickLastCategoryOfCategoryList();
    newEvent.setEventName("Nowe wydarzenie");
    newEvent.setLocName("Real Escape Room");
    newEvent.setLocCity("Gdynia");
    newEvent.setLocStreet("skwer kościuszki");
    newEvent.setLocNumber("15");
    newEvent.setEventDescription("Przykładowy opis zdarzenia");
    browser.sleep(2000);
    newEvent.clickSaveEventButton();
    newEvent.clickCloseEditEventButton();
    browser.sleep(2000);
    newEvent.clickDayOfMonth(1);
    browser.sleep(2000);
    newEvent.clickDayOfMonth(0);
    browser.sleep(2000);
    expect(newEvent.getEventsListAll().count()).toEqual(eventsListCounter);
    newEvent.clickCloseRightColumnButton();
  });
  it('Is should edit event and update grid of calendar', () => {
    newEvent.clickDayOfMonth(0);
    browser.sleep(2000);
    newEvent.clickEditEventFromList(0);

    newEvent.clickShowCategoryListButton();
    browser.sleep(1000);
    newEvent.clickLastCategoryOfCategoryList();
    newEvent.setEventName("Edytowane wydarzenie");
    newEvent.setLocName("Targi w Krakowie");
    newEvent.setLocCity("Kraków");
    newEvent.setLocStreet("Galicyjska");
    newEvent.setLocNumber("9");
    newEvent.setEventDescription("Zmieniony opis zdarzenia");
    browser.sleep(2000);
    newEvent.clickSaveEventButton();
    newEvent.clickCloseEditEventButton();
    browser.sleep(2000);
    newEvent.clickDayOfMonth(1);
    browser.sleep(2000);
    newEvent.clickDayOfMonth(0);
    browser.sleep(2000);
    expect(newEvent.getEditEventFromList(0)).toContain("Edytowane wydarzenie");
    newEvent.clickCloseRightColumnButton();
  });
  it('It should by change the event to public', () => {
    newEvent.clickDayOfMonth(0);
    newEvent.clickEditEventFromList(0);
    newEvent.clickPublicEvent();
    newEvent.clickPublicSettingsOfEvent();
    newEvent.clickUploadImage();
    newEvent.clickSaveEventButton();
    browser.sleep(6000);
    browser.get(browser.baseUrl + "events/Kraków/3/1");
    browser.sleep(4000);
    newEvent.clickNewEvent("Edytowane wydarzenie");
    browser.sleep(2000);
    expect(newEvent.getEventTitle()).toEqual("Edytowane wydarzenie");
    browser.sleep(2000);
  });

  it('It should simulate dialogue in comments', () => {
    newEvent.clickDayOfMonth(0);
    newEvent.clickEditEventFromList(0);
    newEvent.clickCommentsForEvent();
    newEvent.setCommentBody("Pierwsza wiadomość");
    newEvent.clickAddComment();
    browser.sleep(6000);
    browser.get(browser.baseUrl + "events/Kraków/3/1");
    // browser.sleep(4000);
    newEvent.clickNewEvent("Edytowane wydarzenie");
    newEvent.clickCommentsFromEventDetails();
    newEvent.clickCommentReplayFromEventDetails();
    newEvent.setCommentBody("Jakaś odpowiedź");
    newEvent.clickAddComment();
    browser.sleep(2000);
    browser.get(browser.baseUrl + "calendar");
    newEvent.clickDayOfMonth(0);
    newEvent.clickEditEventFromList(0);
    newEvent.clickCommentsForEvent();
    browser.sleep(2000);
    expect(newEvent.getComments().count()).toEqual(2);

  });

  it('It should simulate the register for the event', () => {
    newEvent.clickDayOfMonth(0);
    newEvent.clickEditEventFromList(0);
    newEvent.clickUserListForEvent();
    browser.sleep(1000);
    browser.get(browser.baseUrl + "events/Kraków/3/1");
    // browser.sleep(4000);
    newEvent.clickNewEvent("Edytowane wydarzenie");
    newEvent.clickRegisterForEvent();
    newEvent.clickRegisterUser();
    browser.sleep(3000);
    browser.get(browser.baseUrl + "calendar");
    newEvent.clickDayOfMonth(0);
    newEvent.clickEditEventFromList(0);
    newEvent.clickUserListForEvent();
    browser.sleep(3000);
    expect(newEvent.getUsersList().count()).toEqual(1);
  });
  it('It should remove the event', () => {
    newEvent.clickDayOfMonth(0);
    newEvent.clickEditEventFromList(0);
    newEvent.clickRemoveEvent();
    browser.sleep(2000);
    newEvent.clickDayOfMonth(1);
    browser.sleep(2000);
    newEvent.clickDayOfMonth(0);
    expect(newEvent.getEventsListAll().count()).toEqual(0);
  });
});
