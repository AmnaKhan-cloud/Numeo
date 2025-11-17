import { createBdd } from 'playwright-bdd';
import { testpages } from '../fixtures/fixture.js';
const { Given, When, Then } = createBdd(testpages);

Given('the user is on the OpenCart home page', async ({ pOpenCartPage }) => {
    await pOpenCartPage.goto();
});

When('the user enters {string} into the search box', async ({ pOpenCartPage }, productName) => {
    await pOpenCartPage.enterSearchText(productName);
});

When('clicks on the search button', async ({ pOpenCartPage }) => {
    await pOpenCartPage.clickSearchButton();
});

Then('the search results page should be displayed', async ({ pOpenCartPage }) => {
    const results = await pOpenCartPage.getSearchResultsText();
    if (!results || results.length === 0) throw new Error('No search results found');
});

Then('the system should show {string}',
    async ({ pOpenCartPage }, { text: productName }) => {
        const results = await pOpenCartPage.getSearchResultsText();
        const found = results.some(text => text.includes(productName));
        if (!found) throw new Error(`No products related to ${productName} found`);
    });
