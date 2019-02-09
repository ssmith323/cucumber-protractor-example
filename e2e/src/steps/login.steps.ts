import { expect } from 'chai';
import { Before, Given, Then, When } from 'cucumber';

import { LoginPage } from '../pages/login.po';

let page: LoginPage;

Before(() => {
  page = new LoginPage();
});

Given(/^I am on the login page$/, async () => {
  await page.navigateTo();
});

When(/^I enter my correct username and password$/, async () => {
  await page.setUserName('test.user');
  await page.setPassword('password');
});

When(/^I enter my incorrect username and password$/, async () => {
  await page.setUserName('test.user2');
  await page.setPassword('password');
});

When(/^click the login button$/, async () => {
  await page.clickLogin();
});

Then(/^I should be logged in$/, async () => {
  expect(await page.getTitleText()).to.equal('My Account');
});

Then(/^I should not be logged in$/, async () => {
  expect(await page.getErrorText()).to.equal('Invalid username and password combination!');
});


