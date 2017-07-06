import {browser} from "protractor";
import {LoginData} from "../test_data"
import {MainPage} from "../components/MainPage.po";


describe('Masa Kalendarz Main Page', () => {

  let mainPage = MainPage.buildComponent();

  beforeEach(() => {
    browser.get(browser.baseUrl);
    browser.sleep(2000);
  });

  afterEach(() => {
    mainPage.logout();
  });

  it('Verify that user is logged or no', () => {
    expect(mainPage.validateLogin()).toEqual("Zaloguj się za pomocą Google");
    mainPage.loginData();
    browser.refresh();
    expect(mainPage.validateLogin()).toEqual("Zalogowano jako: kiomi kiomi");

  });

  it('Verify that all menu elements displayed and works', () => {
    mainPage.clickEventsListButton();
    expect(mainPage.getCityField()).toContain("Wydarzenia w");
    mainPage.clickLogoButton();
    expect(mainPage.validateLogin()).toEqual("Zaloguj się za pomocą Google");
    mainPage.loginData();
    browser.refresh();
    mainPage.clickOrganizerButton();
    expect(mainPage.getPersonHelloField()).toEqual("makeplan.");
  });

  it('Verify that login form google oauth works', () => {
    mainPage.clickLoginButton();
    browser.sleep(2000);
    mainPage.loginAsUser();
    browser.sleep(2000);
    expect(mainPage.getLoggedBy()).toEqual("kiomi kiomi");
    expect(mainPage.getPersonHelloField()).toEqual("makeplan.");
  });

  // it('Wyświetlanie listy wydarzeń i wybór wydarzenia', () => {
  // });
  // it('Wyświetlanie szczegółów wydarzenia i walidacja zakładek', () => {
  // });

});
