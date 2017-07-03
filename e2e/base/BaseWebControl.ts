import {By} from 'selenium-webdriver';
import {browser, element, ElementFinder, protractor} from 'protractor';
import 'reflect-metadata';
import {Headers, Response, Http} from "@angular/http";


export class BaseWebControl {
  private constants: any;

  constructor(public rootLocator: By) {
  }

  private rootElement(): ElementFinder {
    return element(this.rootLocator);
  }

  public componentElement(locator: By): ElementFinder {
    return this.rootElement().element(locator);
  }
  public componentElementAll(locator: By) {
    return this.rootElement().all(locator);
  }

  public clickElement(locator: By) {
    this.componentElement(locator).click();
  }

  public saveData(key: string, value: string) {
    browser.executeScript('window.localStorage.setItem("' + key + '","' + value + '");');
  }

  public clearLocalStorage() {
    browser.executeScript('window.localStorage.clear();');
  }

  public getSavedData(key: string) {
    return browser.executeScript('return localStorage.getItem("' + key + '");');
  }

  public getText(locator: By) {
    return this.componentElement(locator).getText();
  }

  public putTextIntoElement(locator: By, text: string) {
    this.componentElement(locator).sendKeys(text);
  }

  public removeTextFromElement(locator: By) {
    this.componentElement(locator).clear();
  }

  public waitForElementToBeVisible() {
    this.waitForElementToBeDisplayed(this.rootElement(), 2000);
  }

  public waitForElementToBeDisplayedInRootElement(locator: By) {
    this.waitForElementToBeDisplayed(this.componentElement(locator), 2000);
  }

  private waitForElementToBeDisplayed(element: ElementFinder, timeout: number) {
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(element), timeout, 'Couldn\'t find element [' +
      element.locator() + '] within ' + browser.params.webElementDisplayedTimeout + ' milliseconds.');
  }

  public login(loggedAs: string, loggedBy: string, userName: string, uid: string) {
    this.saveData("loggedAs", loggedAs);
    this.saveData("loggedBy", loggedBy);
    this.saveData("userName", userName);
    this.saveData("uid", uid);
  }

}
