import { test as base } from 'playwright-bdd';
import * as Pages from './pages.js';

console.log("Pages imported:", Pages);           // check what was imported
console.log("Type of Pages.PLoginPage:", typeof Pages.PLoginPage); // should be 'function'

// helper to create a fixture from a page class
const createTestFunction = (PageClass) => async ({ page }, use) => {
  await use(new PageClass(page));
};

// extend the base test with your page objects
export const test = base.extend({
  pLoginPage: createTestFunction(Pages.PLoginPage), // use Pages.PLoginPage directly
});
/*
console.log("Pages imported:", Pages);
console.log("Type of PLoginPage:", Pages.typeofPLoginPage);
const createTestFunction = (PageClass) => async ({ page }, use) => {
  await use(new PageClass(page));
};
export const test = base.extend({
  pLoginPage: createTestFunction(Pages.PLoginPage),

  });
*/