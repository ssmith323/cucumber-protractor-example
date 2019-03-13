import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(page: string) {
    let url: string;
    switch (page) {
      case 'Home':
        url = '/';
        break;
      case 'My Account':
        url = '/my-account';
        break;
      case 'login':
        url = '/login';
        break;
    }
    return browser.get(url);
  }

  getTitleText() {
    return element(by.css('#main-header')).getText();
  }
}
