import {browser} from "protractor";
import {LoginData} from "../test_data"
import {MainPage} from "../components/MainPage.po";


describe('Masa Kalendarz Left Column', () => {

  let mainPage = MainPage.buildComponent();

  beforeEach(() => {
    browser.get(browser.baseUrl);
    browser.sleep(2000);
  });

  afterEach(() => {
    mainPage.logout();
  });

  it('zmiana miesiąca', () => {
    // expect(mainPage.validateLogin()).toEqual("Zaloguj się za pomocą Google");
    // mainPage.loginData();
    // browser.refresh();
    // expect(mainPage.validateLogin()).toEqual("Zalogowano jako: kiomi kiomi");
  });

  it('prawa kolumna nawigacja', () => {
    // mainPage.clickEventsListButton();
    // expect(mainPage.getCityField()).toContain("Wydarzenia w");
    // mainPage.clickLogoButton();
    // expect(mainPage.validateLogin()).toEqual("Zaloguj się za pomocą Google");
    // mainPage.loginData();
    // browser.refresh();
    // mainPage.clickOrganizerButton();
    // expect(mainPage.getPersonHelloField()).toEqual("makeplan.");
  });
});
