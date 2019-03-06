import { expect } from 'chai';
import { Before, Then, When } from 'cucumber';

import { LoginPage } from '../pages/login.po';
import { MyAccountPage } from '../pages/my-account.po';

let page: MyAccountPage;
let loginPage: LoginPage;

Before(() => {
  page = new MyAccountPage();
  loginPage = new LoginPage();
});

When(/^I navigate to My Account$/, async () => {
  await page.navigateTo();
});

Then(/^I should be taken to the login page$/, async () => {
  const ele = await loginPage.getLoginCard();
  expect(!!(ele.isPresent())).to.equal(true);
});

When(/^It loads$/, async () => {
  // do nothing
});

Then('The header should display', async () => {
  expect(await page.getTitle()).to.equal('My Account');
});

Then('The field {string} should display {string}', async (field: string, value: string) => {
  expect(await page.getField(field)).to.equal(value);
});
