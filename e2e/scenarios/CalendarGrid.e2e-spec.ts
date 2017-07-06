import {browser} from "protractor";
import {LoginData} from "../test_data"
import {MainPage} from "../components/MainPage.po";
import {LeftColumn} from "../components/LeftColumn.po";
import {CalendarGrid} from "../components/CalendarGrid.po";

describe('Masa Kalendarz Calendar Grid', () => {

  let calendarGrid = CalendarGrid.buildComponent();
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
  });

  afterAll(() => {
    mainPage.logout();
    browser.sleep(5000);
  });

  it('Is should show the previous month', () => {
    let monthIndex = calendarGrid.getMonthIndex().then(m => {
      if (m == 0) return 11;
      return m - 1;
    });
    calendarGrid.clickAlertPrevButton();
    browser.sleep(1000);
    expect(calendarGrid.getMonthIndex()).toEqual(monthIndex);
    monthIndex = calendarGrid.getMonthIndex().then(m => {
      if (m == 0) return 11;
      return m - 1;
    });
    calendarGrid.clickAlertPrevButton();
    browser.sleep(1000);
    expect(calendarGrid.getMonthIndex()).toEqual(monthIndex);
    monthIndex = calendarGrid.getMonthIndex().then(m => {
      if (m == 0) return 11;
      return m - 1;
    });
    calendarGrid.clickAlertPrevButton();
    browser.sleep(1000);
    expect(calendarGrid.getMonthIndex()).toEqual(monthIndex);

  });

  it('Is should show the next month', () => {
    let monthIndex = calendarGrid.getMonthIndex().then(m => {
      if (m == 11) return 0;
      return m + 1;
    });
    calendarGrid.clickAlertNextButton();
    browser.sleep(1000);
    expect(calendarGrid.getMonthIndex()).toEqual(monthIndex);
    monthIndex = calendarGrid.getMonthIndex().then(m => {
      if (m == 11) return 0;
      return m + 1;
    });
    calendarGrid.clickAlertNextButton();
    browser.sleep(1000);
    expect(calendarGrid.getMonthIndex()).toEqual(monthIndex);
    monthIndex = calendarGrid.getMonthIndex().then(m => {
      if (m == 11) return 0;
      return m + 1;
    });
    calendarGrid.clickAlertNextButton();
    browser.sleep(1000);
    expect(calendarGrid.getMonthIndex()).toEqual(monthIndex);
  });

});
