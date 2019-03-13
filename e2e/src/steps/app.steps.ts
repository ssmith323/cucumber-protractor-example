import { expect } from 'chai';
import { Before, Then, When } from 'cucumber';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

When(/^I do nothing$/, () => { });

Then(/^I should see the title$/, async () => {
  expect(await page.getTitleText()).to.equal('Cucumber Test');
});
