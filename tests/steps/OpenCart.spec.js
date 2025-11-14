/*import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';



When('User enters product name {string} in search box', async function (productName) {
    await pLoginPage.enterSearchText(productName);

});

When('User clicks on search button', async function () {
    await pLoginPage.clickSearchButton();
});

Then('Search results should contain {string}', async function (productName) {
    const results = await pLoginPage.getSearchResultsText();
    const found = results.some(text => text.includes(productName));
    expect(found).toBeTruthy();
});
*/