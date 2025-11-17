import 'dotenv/config';
import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage.js';
import { OpenCartPage } from '../pages/OpenCartPage.js';

// helper to create a fixture from a page class
// Helper to create a page fixture
const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new PLoginPage(page);
    await use(loginPage);
  },
  openCartPage: async ({ page }, use) => {
    const openCartPage = new POpenCartPage(page);
    await use(openCartPage);
  },
});

export { test };
console.log("pages.js loaded");