import { browser, by, element } from 'protractor';

export class MyAccountPage {

  getField(field: string) {
    return element(by.css(`#${field}`)).getText();
  }
  navigateTo(): any {
    return browser.get('/my-account');
  }

  getTitle() {
    return element(by.css('#pageHeader')).getText();
  }
}
