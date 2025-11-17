import 'dotenv/config';
import { test as base } from 'playwright-bdd';
import * as Pages from '../pages/pages.js';
import { LoginPage } from '../../tests/pages/LoginPage.js';
import { OpenCartPage } from '../../tests/pages/OpenCartPage.js';
// helper to create a fixture from a page class
// Helper to create a page fixture
const createPageFixture = (PageClass) => async ({ page }, use) => {
  const pageObject = new PageClass(page);
  await use(pageObject);;
};

// Extend Playwright-BDD test with our page fixtures
const test = base.extend({
  pLoginPage: createPageFixture(Pages.PLoginPage),
  pOpenCartPage: createPageFixture(Pages.POpenCartPage),
});

export { test };
