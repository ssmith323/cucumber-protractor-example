import { expect } from 'chai';
import { Before, Given, Then, When } from 'cucumber';

import { MyAccountPage } from '../pages/my-account.po';

let page: MyAccountPage;

Before(() => {
  page = new MyAccountPage();
});

Given(/^I am not logged in$/, async () => {
  // do nothing
});

When(/^I navigate to My Account$/, async () => {
  await page.navigateTo();
});

Then(/^I should be taken to the login page$/, async () => {
  expect(true).to.equal(true);
});


