import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';


const { Given, When, Then } = createBdd(test);


Given('User navigate to url', async ({ pLoginPage }) => {
  const url = process.env.baseURL || 'https://naveenautomationlabs.com/opencart/index.php?route=account/login';
  console.log("Navigating to:", url);
  await pLoginPage.goto(url);
});
When('User enter Email {string}', async ({ pLoginPage }, email) => {
  console.log('DEBUG fixture:', pLoginPage);
  await pLoginPage.enterEmailAddress(email);

});

When('User enter password {string}', async ({ pLoginPage }, password) => {
  await pLoginPage.enterPassword(password);
});


When('User click on login button', async ({ pLoginPage }) => {
  await pLoginPage.clickOnLogin();
});

Then('User should see MyAccount after login', async ({ pLoginPage }) => {

  await pLoginPage.verifyLandonHome();
});

Then('User should verify error message contains {string}', { timeout: 20 * 1000 }, async function ({ pLoginPage }, errorMessage) {

  await pLoginPage.verifyErrorContains(errorMessage);
});





