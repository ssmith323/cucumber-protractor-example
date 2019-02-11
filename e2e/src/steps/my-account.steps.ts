import { expect } from 'chai';
import { Before, Given, Then, When } from 'cucumber';

import { LoginPage } from '../pages/login.po';
import { MyAccountPage } from '../pages/my-account.po';

let page: MyAccountPage;
let loginPage: LoginPage;

Before(() => {
  page = new MyAccountPage();
  loginPage = new LoginPage();
});

Given(/^I am not logged in$/, async () => {
  // do nothing
});

When(/^I navigate to My Account$/, async () => {
  await page.navigateTo();
});

Then(/^I should be taken to the login page$/, async () => {
  expect(loginPage.getLoginCard()).to.equal(true);
});


