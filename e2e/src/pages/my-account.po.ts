import { browser, by, element } from 'protractor';

export class MyAccountPage {
  navigateTo(): any {
    return browser.get('/my-account');
  }

  getErrorText(): any {
    return element(by.css('#error-message')).getText();
  }
}
