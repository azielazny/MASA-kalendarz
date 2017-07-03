import {browser} from "protractor";
import {LoginData} from "../test_data"
import {MainPage} from "../components/MainPage.po";
import {LeftColumn} from "../components/LeftColumn.po";

describe('Masa Kalendarz Left Column', () => {

  let leftColumn = LeftColumn.buildComponent();
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

  it('Verify that toggle left column', () => {
    leftColumn.clickBarsButton();
    expect(leftColumn.shortViewLeftColumn().isPresent()).toBeTruthy();
    browser.sleep(1000);
    leftColumn.clickBarsButton();
    expect(leftColumn.shortViewLeftColumn().isPresent()).toBeFalsy();
  });

  it('it should change the events name', () => {
    expect(leftColumn.alertFieldTitle()).toContain("Wydarzenie 1");
    leftColumn.clickAlertNextButton();
    browser.sleep(1000);
    expect(leftColumn.alertFieldTitle()).toContain("Wydarzenie 2");
    browser.sleep(1000);
    leftColumn.clickAlertNextButton();
    expect(leftColumn.alertFieldTitle()).toContain("Wydarzenie 3");
    browser.sleep(1000);
    leftColumn.clickAlertNextButton();
    expect(leftColumn.alertFieldTitle()).toContain("Wydarzenie 4");
    browser.sleep(1000);
    leftColumn.clickAlertNextButton();
    expect(leftColumn.alertFieldTitle()).toContain("Wydarzenie 5");
    browser.sleep(1000);
    leftColumn.clickAlertNextButton();
    expect(leftColumn.alertFieldTitle()).toContain("Wydarzenie 1");
    browser.sleep(1000);
    leftColumn.clickAlertPrevButton();
    expect(leftColumn.alertFieldTitle()).toContain("Wydarzenie 5");
    browser.sleep(1000);
    leftColumn.clickAlertPrevButton();
    expect(leftColumn.alertFieldTitle()).toContain("Wydarzenie 4");
  });

  it('It should add new category', () => {
    leftColumn.selectCategoryColor();
    browser.sleep(2000);
    leftColumn.selectCategoryName();
    browser.sleep(2000);
    leftColumn.clickCategorySubmitButton();
    browser.sleep(3000);
    expect(leftColumn.getLastCategoryName()).toContain("Nowa kategoria");
    leftColumn.clickGridFirstDayButton();
    leftColumn.clickAddEventButton();
    leftColumn.clickShowCategoryListButton();
    browser.sleep(2000);
    expect(leftColumn.getLastCategoryOfCategoryList()).toContain("Nowa kategoria");

  });

  it('It should remove last category', () => {
    let categoryListAll = leftColumn.getCategoryListAll().count().then((result) => {
      return result - 1
    });
    leftColumn.clickCategoryDeleteButton();
    browser.sleep(2000);
    expect(leftColumn.getCategoryListAll().count()).toEqual(categoryListAll);
    leftColumn.clickGridFirstDayButton();
    leftColumn.clickAddEventButton();
    leftColumn.clickShowCategoryListButton();
    browser.sleep(2000);
    expect(leftColumn.getLastCategoryOfCategoryList()).toContain("Nowa kategoria");
  });
  it('Verify that all left menu elements displayed and works', () => {
    leftColumn.clickSettingsButton();
    expect(leftColumn.getSettingsPage()).toEqual('Ustawienia');
    leftColumn.getPublicEventsPage();
    browser.sleep(2000);
    expect(mainPage.getCityField()).toContain("Wydarzenia w");
    browser.get("/calendar");//window.location.href
    browser.sleep(2000);
    leftColumn.clickLogoutButton();
    expect(mainPage.validateLogin()).toEqual("Zaloguj się za pomocą Google");
  });


});
