import 'dotenv/config';
import { test as base } from 'playwright-bdd';
import { PLoginPage } from '../pages/LoginPage'
import { POpenCartPage } from '../pages/OpenCartPage.js';
// helper to create a fixture from a page class
// Helper to create a page fixture
const createPageFixture = (PageClass) => async ({ page }, use) => {
  const pageObject = new PageClass(page);
  await use(pageObject);
};
// check what was imported
console.log("Type of Pages.PLoginPage:", typeof PLoginPage);
// Extend Playwright-BDD test with our page fixtures
const testpages = base.extend({
  pLoginPage: createPageFixture(PLoginPage),
  pOpenCartPage: createPageFixture(POpenCartPage),
});
// check what was imported
console.log("Type of Pages.PLoginPage:", typeof PLoginPage);
export { testpages };
