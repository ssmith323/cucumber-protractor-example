import { Before, Given } from 'cucumber';

import { AppPage } from '../pages/app.po';


let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given('I am on the {string} page', { timeout: 2 * 5000 }, async (url: string) => {
  await page.navigateTo(url);
});



