import { browser } from 'protractor';

export class MyAccountPage {
  navigateTo(): any {
    return browser.get('/my-account');
  }
}
