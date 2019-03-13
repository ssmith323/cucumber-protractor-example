import { expect } from 'chai';
import { Before, Given, Then, When } from 'cucumber';

import { LoginPage } from '../pages/login.po';

let page: LoginPage;

Before(() => {
  page = new LoginPage();
});

Given(/^I am on the login page$/, { timeout: 2 * 5000 }, async () => {
  await page.navigateTo();
});

Given(/^I am not logged in$/, async () => {
  // do nothing
});


When(/^I enter my correct username$/, { timeout: 2 * 5000 }, async () => {
  await page.setUserName('test.user');
});

When(/^I enter my correct password$/, { timeout: 2 * 5000 }, async () => {
  await page.setPassword('password');
});

When(/^I enter my incorrect username$/, { timeout: 2 * 5000 }, async () => {
  await page.setUserName('test.user2');
});

When(/^I enter my incorrect password$/, { timeout: 2 * 5000 }, async () => {
  await page.setPassword('password');
});

When(/^click the login button$/, { timeout: 2 * 5000 }, async () => {
  await page.clickLogin();
});

Then(/^I should be logged in$/, { timeout: 2 * 5000 }, async () => {
  expect(await page.getTitleText()).to.equal('My Account');
});

Then(/^I should not be logged in$/, { timeout: 2 * 5000 }, async () => {
  expect(await page.getErrorText()).to.equal('Invalid username and password combination!');
});

Given(/^I am logged in$/, { timeout: 2 * 5000 }, async () => {
  await page.navigateTo();
  await page.setUserName('test.user');
  await page.setPassword('password');
  await page.clickLogin();
});


