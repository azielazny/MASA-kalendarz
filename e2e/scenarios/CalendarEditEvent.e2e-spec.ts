import {browser} from "protractor";
import {LoginData} from "../test_data"
import {MainPage} from "../components/MainPage.po";


describe('Masa Kalendarz Left Column', () => {


  let newEvent = EditEvent.buildComponent();
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
