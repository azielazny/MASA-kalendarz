import {browser} from "protractor";
import {LoginData} from "../test_data"
import {MainPage} from "../components/MainPage.po";
import {NewEvent} from "../components/NewEvent.po";


fdescribe('Masa Kalendarz New Event', () => {

  let newEvent = NewEvent.buildComponent();
  let mainPage = MainPage.buildComponent();

  beforeAll(() => {
    browser.get(browser.baseUrl);
    browser.sleep(2000);
    mainPage.clickLoginButton();

    browser.getAllWindowHandles().then(handles => {
      let newTabHandle = handles[2];
      browser.switchTo().window(newTabHandle).then(() => {
        mainPage.typeInEmailField(LoginData.correct_login);
        mainPage.clickEmailNextButton();
        browser.sleep(1000);
        mainPage.typeInPasswordField(LoginData.correct_password);
        mainPage.clickPasswordNextButton();
        browser.sleep(1000);
        browser.switchTo().window(handles[0]);
      });
    });
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
    let eventsListCounter = newEvent.getEventsListAll().count().then((result) => {
      return result + 1
    });
    newEvent.clickAddEventButton();
    newEvent.clickShowCategoryListButton();
    browser.sleep(1000);
    newEvent.clickLastCategoryOfCategoryList();
    newEvent.setEventName("Nowe wydarzenie");
    newEvent.setLocName("Politechnika Gdańska");
    newEvent.setLocCity("Gdynia");
    newEvent.setLocStreet("Narutowicza");
    newEvent.setLocNumber("11/12");
    newEvent.setEventDescription("Przykładowy opis zdarzenia");
    browser.sleep(2000);
    newEvent.clickSaveEventButton();
    newEvent.clickCloseEditEventButton();
    browser.sleep(2000);
    newEvent.clickDayOfMonth(1);
    browser.sleep(2000);
    newEvent.clickDayOfMonth(0);
    newEvent.clickCloseRightColumnButton();
    browser.sleep(2000);
    expect(newEvent.getEventsListAll().count()).toEqual(eventsListCounter);
  });

});
