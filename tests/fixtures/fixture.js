import 'dotenv/config';
import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage.js';
import { OpenCartPage } from '../pages/OpenCartPage.js';

// helper to create a fixture from a page class
// Helper to create a page fixture
const createPageFixture = (PageClass) => async ({ page }, use) => {
  const pageObject = new PageClass(page);
  await use(pageObject);
};

// Extend Playwright-BDD test with our page fixtures
export const test = base.extend({
  pLoginPage: createPageFixture(LoginPage),
  pOpenCartPage: createPageFixture(OpenCartPage),
});

export { test };
