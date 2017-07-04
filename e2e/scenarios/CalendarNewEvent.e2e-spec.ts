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

  // it('Is should add the new event and update grid of calendar', () => {
  //   newEvent.clickDayOfMonth(0);
  //   browser.sleep(2000);
  //   let eventsListCounter = newEvent.getEventsListAll().count().then((result) => {
  //     return result + 1
  //   });
  //   newEvent.clickAddEventButton();
  //   newEvent.clickShowCategoryListButton();
  //   browser.sleep(1000);
  //   newEvent.clickLastCategoryOfCategoryList();
  //   newEvent.setEventName("Nowe wydarzenie");
  //   newEvent.setLocName("Real Escape Room");
  //   newEvent.setLocCity("Gdynia");
  //   newEvent.setLocStreet("skwer kościuszki");
  //   newEvent.setLocNumber("15");
  //   newEvent.setEventDescription("Przykładowy opis zdarzenia");
  //   browser.sleep(2000);
  //   newEvent.clickSaveEventButton();
  //   newEvent.clickCloseEditEventButton();
  //   browser.sleep(2000);
  //   newEvent.clickDayOfMonth(1);
  //   browser.sleep(2000);
  //   newEvent.clickDayOfMonth(0);
  //   browser.sleep(2000);
  //   expect(newEvent.getEventsListAll().count()).toEqual(eventsListCounter);
  //   newEvent.clickCloseRightColumnButton();
  // });
  // it('Is should edit event and update grid of calendar', () => {
  //   newEvent.clickDayOfMonth(0);
  //   browser.sleep(2000);
  //   newEvent.clickEditEventFromList(0);
  //
  //   newEvent.clickShowCategoryListButton();
  //   browser.sleep(1000);
  //   newEvent.clickLastCategoryOfCategoryList();
  //   newEvent.setEventName("Edytowane wydarzenie");
  //   newEvent.setLocName("Targi w Krakowie");
  //   newEvent.setLocCity("Kraków");
  //   newEvent.setLocStreet("Galicyjska");
  //   newEvent.setLocNumber("9");
  //   newEvent.setEventDescription("Zmieniony opis zdarzenia");
  //   browser.sleep(2000);
  //   newEvent.clickSaveEventButton();
  //   newEvent.clickCloseEditEventButton();
  //   browser.sleep(2000);
  //   newEvent.clickDayOfMonth(1);
  //   browser.sleep(2000);
  //   newEvent.clickDayOfMonth(0);
  //   browser.sleep(2000);
  //   expect(newEvent.getEditEventFromList(0)).toContain("Edytowane wydarzenie");
  //   newEvent.clickCloseRightColumnButton();
  // });
  it('It should by change the event to public', () => {
    newEvent.clickDayOfMonth(0);
    newEvent.clickEditEventFromList(0);
    newEvent.clickPublicEvent();
    newEvent.clickPublicSettingsOfEvent();
    newEvent.clickUploadImage();
    newEvent.clickSaveEventButton();
    browser.sleep(8000);
    browser.get(browser.baseUrl+"events/Kraków/3/1");
    browser.sleep(4000);
    newEvent.clickNewEvent("Edytowane wydarzenie");
    browser.sleep(2000);
    expect(newEvent.getEventTitle()).toEqual("Edytowane wydarzenie");
    browser.sleep(2000);
  });
  //
  // it('obsługa komentarzy', () => {
  //   // expect(mainPage.validateLogin()).toEqual("Zaloguj się za pomocą Google");
  //   // mainPage.loginData();
  //   // browser.refresh();
  //   // expect(mainPage.validateLogin()).toEqual("Zalogowano jako: kiomi kiomi");
  // });
  //
  // it('zapis na wydarzenie z drukiem', () => {
  //   // expect(mainPage.validateLogin()).toEqual("Zaloguj się za pomocą Google");
  //   // mainPage.loginData();
  //   // browser.refresh();
  //   // expect(mainPage.validateLogin()).toEqual("Zalogowano jako: kiomi kiomi");
  // });
});
