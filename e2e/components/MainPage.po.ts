import {by} from 'protractor';
import {By} from 'selenium-webdriver';
import {BaseWebControl} from "../base/BaseWebControl";
import {browser} from "protractor";
import {LoginData} from "../test_data";


export class MainPage extends BaseWebControl {

  private EMAIL_FIELD = by.id('identifierId');
  private LOGIN_FORM_BUTTON = by.id('googleSignInBtn');
  private PASSWORD_FIELD = by.name('password');
  private EVENTS_LIST_BUTTON = by.id('eventsList');
  private ORGANIZER_BUTTON = by.id('organizer');
  private LOGO_BUTTON = by.id('logo');
  private CITY_FIELD = by.className('city-header');
  private LOGOBOX_FIELD = by.className('logoBox');
  private EMAIL_NEXT_BUTTON = by.id('identifierNext');
  private PASSWORD_NEXT_BUTTON= by.id('passwordNext');


  constructor(public rootLocator: By) {
    super(rootLocator);
  }

  public validateLogin() {
    return this.getText(this.LOGIN_FORM_BUTTON);
  }

  public loginData() {
    this.login(LoginData.correct_loggedAs, LoginData.correct_loggedBy, LoginData.correct_userName, LoginData.correct_uid);
  }

  public logout() {
    this.clearLocalStorage();
  }


  public clickEventsListButton() {
    return this.clickElement(this.EVENTS_LIST_BUTTON);
  }

  public clickLogoButton() {
    return this.clickElement(this.LOGO_BUTTON);
  }

  public getCityField() {
    return this.getText(this.CITY_FIELD);
  }

  public getPersonHelloField() {
    return this.getText(this.LOGOBOX_FIELD);
  }

  public clickOrganizerButton() {
    return this.clickElement(this.ORGANIZER_BUTTON);
  }

  public clickSubmitButton() {
    return this.clickElement(this.LOGIN_FORM_BUTTON);
  }

  public clickLoginButton() {
    return this.clickElement(this.LOGIN_FORM_BUTTON);
  }


  public typeInEmailField(email) {
    let emailInput = browser.driver.findElement(this.EMAIL_FIELD);
    emailInput.sendKeys(email);
  }

  public clickEmailNextButton() {
    return browser.driver.findElement(this.EMAIL_NEXT_BUTTON).click();
  }

  public typeInPasswordField(password) {
    let passwordInput = browser.driver.findElement(this.PASSWORD_FIELD);
    passwordInput.sendKeys(password);
  }

  public clickPasswordNextButton() {
    return browser.driver.findElement(this.PASSWORD_NEXT_BUTTON).click();
  }

  public getLoggedBy() {
   return this.getSavedData("userName");
  }


  public static buildComponent() {
    return new MainPage(by.id('app-root'));
  }

}

