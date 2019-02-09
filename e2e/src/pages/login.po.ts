import { browser, by, element } from 'protractor';

export class LoginPage {
  getErrorText(): any {
    return element(by.css('#error-message')).getText();
  }

  async clickLogin() {
    return await element(by.css('button#submit')).click();
  }

  setUserName(username: string): any {
    return element(by.css('input#username')).sendKeys(username);
  }
  setPassword(password: string): any {
    return element(by.css('input#password')).sendKeys(password);
  }

  navigateTo() {
    return browser.get('/login');
  }

  getTitleText() {
    return element(by.css('h1.page-header')).getText();
  }
}
