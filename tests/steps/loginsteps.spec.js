import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';


const { Given, When, Then } = createBdd(test);


Given('User navigate to url', async ({ loginPage }) => {
  const url = process.env.baseURL || 'https://naveenautomationlabs.com/opencart/index.php?route=account/login';
  console.log("Navigating to:", url);
  await loginPage.goto(url);
});
When('User enter Email {string}', async ({ loginPage }, email) => {
  console.log('DEBUG fixture:', loginPage);
  await loginPage.enterEmailAddress(email);

});

When('User enter password {string}', async ({ loginPage }, password) => {
  await loginPage.enterPassword(password);
});


When('User click on login button', async ({ loginPage }) => {
  await loginPage.clickOnLogin();
});

Then('User should see MyAccount after login', async ({ loginPage }) => {

  await loginPage.verifyLandonHome();
});

When('User logs in with environment credentials', async ({ loginPage }) => {
  const email = process.env.TEST_EMAIL;
  const password = process.env.TEST_PASSWORD;
  if (!email || !password) throw new Error('TEST_EMAIL and TEST_PASSWORD must be set in environment');
  await loginPage.login(email, password);
});

Then('User should verify error message contains {string}', { timeout: 20 * 1000 }, async function ({ loginPage }, errorMessage) {

  await loginPage.verifyErrorContains(errorMessage);
});





