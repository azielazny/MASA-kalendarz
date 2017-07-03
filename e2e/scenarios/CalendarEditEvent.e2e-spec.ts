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

  it('edycja wydarzenia wydarzenia i aktualizacja gridu', () => {
    // expect(mainPage.validateLogin()).toEqual("Zaloguj się za pomocą Google");
    // mainPage.loginData();
    // browser.refresh();
    // expect(mainPage.validateLogin()).toEqual("Zalogowano jako: kiomi kiomi");
  });

  it('wydarzenie publiczne', () => {
    // expect(mainPage.validateLogin()).toEqual("Zaloguj się za pomocą Google");
    // mainPage.loginData();
    // browser.refresh();
    // expect(mainPage.validateLogin()).toEqual("Zalogowano jako: kiomi kiomi");
  });

  it('obsługa komentarzy', () => {
    // expect(mainPage.validateLogin()).toEqual("Zaloguj się za pomocą Google");
    // mainPage.loginData();
    // browser.refresh();
    // expect(mainPage.validateLogin()).toEqual("Zalogowano jako: kiomi kiomi");
  });

  it('zapis na wydarzenie z drukiem', () => {
    // expect(mainPage.validateLogin()).toEqual("Zaloguj się za pomocą Google");
    // mainPage.loginData();
    // browser.refresh();
    // expect(mainPage.validateLogin()).toEqual("Zalogowano jako: kiomi kiomi");
  });




});
